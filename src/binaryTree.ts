export class TreeNode {
  key: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(data: number) {
    this.key = data;
  }
}

export class BinarySearchTree {
  root: TreeNode | null = null;

  get(key: number) {
    let current = this.root;
    while (true) {
      if (current === null) {
        return null;
      }

      if (key < current.key) {
        current = current.left;
        continue;
      } else if (key > current.key) {
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
      if (key < current.key) {
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
    if (newNode.key! < node.key!) {
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

  getLeastChildByKey(key: number) {
    let node = this.get(key);

    return node == null ? node : this.getLeastChildByNode(node);
  }

  private getLeastChildByNode(node: TreeNode) {
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
      this.delete(leastChildOnRight.key);
      node.key = leastChildOnRight.key;
    }

    this.replace(key, node.left !== null ? node.left : node.right);
  }

  replace(target: number, replacement: null | TreeNode) {
    let current = this.root;

    while (true) {
      if (current == null) {
        return;
      }

      if (current?.left?.key == target) {
        current.left = replacement;
        return;
      }

      if (current?.right?.key == target) {
        current.right = replacement;
        return;
      }

      if (target < current.key) {
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
