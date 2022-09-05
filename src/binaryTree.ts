export class TreeNode {
  value: any;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(value: number) {
    this.value = value;
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

      if (key < current.value) {
        current = current.left;
        continue;
      } else if (key > current.value) {
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
      if (key < current.value) {
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

  private insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.value! < node.value!) {
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

  add(data) {
    const newNode = new TreeNode(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
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
      this.delete(leastChildOnRight.value);
      node.value = leastChildOnRight.value;
    }

    this.replace(key, node.left !== null ? node.left : node.right);
  }

  replace(target: number, replacement: null | TreeNode) {
    let current = this.root;

    while (true) {
      if (current == null) {
        return;
      }

      if (current?.left?.value == target) {
        current.left = replacement;
        return;
      }

      if (current?.right?.value == target) {
        current.right = replacement;
        return;
      }

      if (target < current.value) {
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

export const preorderTraverse = (node: TreeNode | null, arr: number[] = []) => {
  if (node === null) return arr;

  arr.push(node.value);
  arr = preorderTraverse(node.left, arr);
  arr = preorderTraverse(node.right, arr);
  return arr;
};

export const inorderTraverse = (node: TreeNode | null, arr: number[] = []) => {
  if (node === null) return arr;

  arr = inorderTraverse(node.left, arr);
  arr.push(node.value);
  arr = inorderTraverse(node.right, arr);
  return arr;
};

export const postorderTraverse = (
  node: TreeNode | null,
  arr: number[] = []
) => {
  if (node === null) return arr;

  arr = postorderTraverse(node.left, arr);
  arr = postorderTraverse(node.right, arr);
  arr.push(node.value);
  return arr;
};

export const breadthFirstSearchTraverse = (
  queue: Array<TreeNode>,
  array: any[] = []
) => {
  if (!queue.length) return array;
  let current = queue.shift()!;
  array.push(current.value);

  if (current.left) {
    queue.push(current.left);
  }
  if (current.right) {
    queue.push(current.right);
  }

  breadthFirstSearchTraverse(queue, array);
  return array;
};

export const breadthFirstSearchTraverse2 = (
  queue: Array<TreeNode>,
  array: any[] = []
) => {
  while (queue.length) {
    let current = queue.shift()!;
    array.push(current.value);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return array;
};
