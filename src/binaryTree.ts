class TreeNode {
  data: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(data: number) {
    this.data = data;
  }
}

// Binary Search tree class
export class BinarySearchTree {
  root: TreeNode | null = null;
  constructor() {
    // root of a binary search tree
  }

  get(key: number) {
    let current = this.root;
    while (true) {
      if (current === null) {
        return null;
      }

      if (key < current.data) {
        current = current.left;
        break;
      } else if (key > current.data) {
        current = current.right;
        break;
      } else {
        return current;
      }
    }
  }

  insert(data) {
    const newNode = new TreeNode(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.data! < node.data!) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  // function to be implemented
  // insert(data)
  // remove(data)

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    }

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    //

    if (node.left == null && node.right == null) {
      return null;
    }

    if (node.left == null) {
      return node.right;
    }

    if (node.right == null) {
      return node.left;
    }
  }

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)
}
