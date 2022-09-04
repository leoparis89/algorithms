export class TreeNode {
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
        continue;
      } else if (key > current.data) {
        current = current.right;
        continue;
      } else {
        return current;
      }
    }
  }

  insertImperative(key: number) {
    let newNode = new TreeNode(key);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (key < current.data) {
        if (current.left == null) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
          continue;
        }
      } else {
        if (current.right == null) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
          continue;
        }
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

  //   remove(data) {
  //     this.root = this.removeNode(this.root, data);
  //   }

  //   removeNode(node, key) {
  //     if (node == null) {
  //       return null;
  //     }

  //     if (key < node.data) {
  //       node.left = this.removeNode(node.left, key);
  //       return node;
  //     }

  //     if (key > node.data) {
  //       node.right = this.removeNode(node.right, key);
  //       return node;
  //     }

  //     if (node.left == null && node.right == null) {
  //       return null;
  //     }

  //     if (node.left == null) {
  //       return node.right;
  //     }

  //     if (node.right == null) {
  //       return node.left;
  //     }
  //   }

  getLeastChildByKey(key: number) {
    let node = this.get(key);

    return node == null ? node : this.getLeastChildByNode(node);
  }

  getLeastChildByNode(node: TreeNode) {
    if (node.left == null) return node;

    return this.getLeastChildByNode(node.left);
  }

  delete(key: number) {
    let node = this.get(key);

    if (node == null) {
      return;
    }

    if (node.left === null && node.right === null) {
      this.replace(key, null);
      return;
    }

    if (node.left !== null && node.right !== null) {
      const leastChildOnRight = this.getLeastChildByNode(node.right);
      console.log(leastChildOnRight);
      //
    }

    if (node.left !== null) {
      this.replace(key, node.left);
    } else {
      this.replace(key, node.right);
    }
  }

  replace(target: number, replacement: null | TreeNode) {
    let current = this.root;

    while (true) {
      if (current == null) {
        return;
      }

      if (current?.left?.data == target) {
        current.left = replacement;
        return;
      }

      if (current?.right?.data == target) {
        current.right = replacement;
        return;
      }

      if (target < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
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
