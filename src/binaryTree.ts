class TreeNode {
  data: TreeNode | null = null;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(data) {
    this.data = data;
  }
}

// Binary Search tree class
export class BinarySearchTree {
  root: TreeNode | null = null;
  constructor() {
    // root of a binary search tree
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

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)
}
