class Tree {
  root: TreeNode | null = null;

  add(value: number) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.root.add(value);
    }
  }

  toObject() {
    return this.root;
  }
}

class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  height: number;
  constructor(value: number) {
    this.value = value;
    this.height = 1;
  }

  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right!.value;
    this.left = this.right;
    this.right = this.right!.right;
    this.left!.right = this.left!.left;
    this.left!.left = leftBefore;
    this.left!.value = valueBefore;
    this.left!.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left!.value;
    this.right = this.left;
    this.left = this.left!.left;
    this.right!.left = this.right!.right;
    this.right!.right = rightBefore;
    this.right!.value = valueBefore;
    this.right!.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left!.height + 1;
    } else {
      this.height = this.right.height + 1;
    }
  }

  add(value) {
    if (value < this.value) {
      // Go left
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new TreeNode(value);
      }

      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      // Go right
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new TreeNode(value);
      }

      if (!this.left || this.left.height < this.right.height) {
        this.height = this.right.height + 1;
      }
    }
    // decide to go left or right
    // find the right place
    // make sure you upadte height

    this.balance();
  }

  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    if (leftHeight > rightHeight + 1) {
      const leftRightHeight = this.left?.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left?.left ? this.left.left.height : 0;

      if (leftRightHeight > leftLeftHeight) {
        this.left!.rotateRR();
      }
      this.rotateLL();
      // they are 2 different
    } else if (rightHeight < leftHeight + 1) {
      const rightRightHeight = this.right?.right ? this.right.right.height : 0;
      const rightLeftHeight = this.right?.left ? this.right.left.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right?.rotateLL();
      }
    }
    this.rotateRR();
  }
}
