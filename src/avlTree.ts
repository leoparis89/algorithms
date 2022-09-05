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
    this.right!.updateInNewLocation();
    this.updateInNewLocation();
  }

  rotateLL() {
    this.left!.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {}

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
