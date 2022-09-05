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
  constructor(value: number) {
    this.value = value;
  }

  add(value) {}
}
