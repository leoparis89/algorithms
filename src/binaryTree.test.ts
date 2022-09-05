import {
  BinarySearchTree,
  TreeNode,
  preorderTraverse,
  inorderTraverse,
  postorderTraverse,
  breadthFirstSearchTraverse,
  breadthFirstSearchTraverse2,
} from "./binaryTree";
const makeTutorialTree = () => {
  const tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
  tree.add(8);
  tree.add(3);
  tree.add(12);
  tree.add(17);
  tree.add(6);
  tree.add(7);
  return tree;
};

describe("Binary Search Tree", () => {
  test("adding first node", () => {
    let tree = new BinarySearchTree();
    tree.add(7);

    expect(tree).toEqual({ root: { value: 7, left: null, right: null } });
    // mergeSort(input);
  });

  test("adding multiple nodes", () => {
    let tree = new BinarySearchTree();

    tree.add(7);
    tree.add(2);
    tree.add(8);
    tree.add(9);

    expect(tree).toEqual({
      root: {
        value: 7,
        left: { value: 2, left: null, right: null },
        right: {
          value: 8,
          left: null,
          right: { value: 9, left: null, right: null },
        },
      },
    });
    // mergeSort(input);
  });

  test("adding multiple nodes (imperative)", () => {
    let tree = new BinarySearchTree();

    tree.insertImperative(7);
    tree.insertImperative(2);
    tree.insertImperative(8);
    tree.insertImperative(9);

    expect(tree).toEqual({
      root: {
        value: 7,
        left: { value: 2, left: null, right: null },
        right: {
          value: 8,
          left: null,
          right: { value: 9, left: null, right: null },
        },
      },
    });
  });

  test("get", () => {
    let tree = new BinarySearchTree();

    tree.add(7);
    tree.add(2);
    tree.add(8);
    tree.add(9);

    expect(tree.get(8)).toEqual({
      value: 8,
      left: null,
      right: { value: 9, left: null, right: null },
    });

    expect(tree.get(9)).toEqual({ value: 9, left: null, right: null });
    expect(tree.get(3)).toEqual(null);
  });

  test("getLeastChild ", () => {
    let tree = new BinarySearchTree();

    tree.add(7);
    tree.add(2);
    tree.add(8);
    tree.add(9);

    expect(tree.getLeastChildByKey(7)).toEqual({
      value: 2,
      left: null,
      right: null,
    });

    expect(tree.getLeastChildByKey(8)).toEqual({
      value: 8,
      left: null,
      right: { value: 9, left: null, right: null },
    });
  });

  test("replace ", () => {
    let tree = new BinarySearchTree();

    tree.add(7);
    tree.add(2);
    tree.add(8);
    tree.add(9);

    tree.replace(9, null);
    expect(tree).toEqual({
      root: {
        value: 7,
        left: { value: 2, left: null, right: null },
        right: { value: 8, left: null, right: null },
      },
    });

    tree.add(9);
    let node = new TreeNode(88);
    tree.replace(8, node);
    expect(tree).toEqual({
      root: {
        value: 7,
        left: { value: 2, left: null, right: null },
        right: { value: 88, left: null, right: null },
      },
    });
  });

  describe("delete", () => {
    test("case with no children", () => {
      let tree = makeTutorialTree();

      expect(tree).toEqual({
        root: {
          value: 10,
          left: {
            value: 5,
            left: { value: 3, left: null, right: null },
            right: {
              value: 8,
              left: {
                value: 6,
                left: null,
                right: { value: 7, left: null, right: null },
              },
              right: null,
            },
          },
          right: {
            value: 15,
            left: { value: 12, left: null, right: null },
            right: { value: 17, left: null, right: null },
          },
        },
      });

      tree.delete(7);
      expect(tree).toEqual({
        root: {
          value: 10,
          left: {
            value: 5,
            left: { value: 3, left: null, right: null },
            right: {
              value: 8,
              left: {
                value: 6,
                left: null,
                right: null,
              },
              right: null,
            },
          },
          right: {
            value: 15,
            left: { value: 12, left: null, right: null },
            right: { value: 17, left: null, right: null },
          },
        },
      });

      tree.delete(12);

      expect(tree).toEqual({
        root: {
          value: 10,
          left: {
            value: 5,
            left: { value: 3, left: null, right: null },
            right: {
              value: 8,
              left: {
                value: 6,
                left: null,
                right: null,
              },
              right: null,
            },
          },
          right: {
            value: 15,
            left: null,
            right: { value: 17, left: null, right: null },
          },
        },
      });
    });

    test("case with 2 children", () => {
      let tree = makeTutorialTree();
      tree.delete(5);
      expect(tree).toEqual({
        root: {
          value: 10,
          left: {
            value: 6,
            left: { value: 3, left: null, right: null },
            right: {
              value: 8,
              left: { value: 7, left: null, right: null },
              right: null,
            },
          },
          right: {
            value: 15,
            left: { value: 12, left: null, right: null },
            right: { value: 17, left: null, right: null },
          },
        },
      });
    });

    test("case 1 child (lef)", () => {
      let tree = new BinarySearchTree();
      tree.add(10);
      tree.add(5);
      tree.add(15);
      tree.add(12);
      tree.add(11);
      tree.add(14);
      expect(tree).toEqual({
        root: {
          value: 10,
          left: { value: 5, left: null, right: null },
          right: {
            value: 15,
            left: {
              value: 12,
              left: { value: 11, left: null, right: null },
              right: { value: 14, left: null, right: null },
            },
            right: null,
          },
        },
      });

      tree.delete(15);
      expect(tree).toEqual({
        root: {
          value: 10,
          left: { value: 5, left: null, right: null },
          right: {
            value: 12,
            left: { value: 11, left: null, right: null },
            right: { value: 14, left: null, right: null },
          },
        },
      });
    });
  });
});

test("Binary search tree 2", () => {
  const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
  const tree = new BinarySearchTree();
  nums.map((num) => tree.add(num));
  const objs: any = tree.root;

  expect(objs!.value).toEqual(3);

  expect(objs.left.value).toEqual(1);
  expect(objs.left.left).toBeNull();

  expect(objs.left.right.value).toEqual(2);
  expect(objs.left.right.left).toBeNull();
  expect(objs.left.right.right).toBeNull();

  expect(objs.right.value).toEqual(7);

  expect(objs.right.left.value).toEqual(4);
  expect(objs.right.left.left).toBeNull();

  expect(objs.right.left.right.value).toEqual(6);
  expect(objs.right.left.right.left.value).toEqual(5);
  expect(objs.right.left.right.left.right).toBeNull();
  expect(objs.right.left.right.left.left).toBeNull();

  expect(objs.right.right.value).toEqual(10);
  expect(objs.right.right.right).toBeNull();

  expect(objs.right.right.left.value).toEqual(9);
  expect(objs.right.right.left.right).toBeNull();

  expect(objs.right.right.left.left.value).toEqual(8);
  expect(objs.right.right.left.left.right).toBeNull();
  expect(objs.right.right.left.left.left).toBeNull();
});

describe("BST traversals", () => {
  const inputs = [8, 3, 1, 6, 4, 7, 10, 14, 13];
  const tree = new BinarySearchTree();
  inputs.forEach((input) => tree.add(input));

  expect(tree).toEqual({
    root: {
      left: {
        left: { left: null, right: null, value: 1 },
        right: {
          left: { left: null, right: null, value: 4 },
          right: { left: null, right: null, value: 7 },
          value: 6,
        },
        value: 3,
      },
      right: {
        left: null,
        right: {
          left: { left: null, right: null, value: 13 },
          right: null,
          value: 14,
        },
        value: 10,
      },
      value: 8,
    },
  });

  test("preorder", () => {
    let result = preorderTraverse(tree.root!);
    expect(result).toEqual(inputs);
  });
  test("inorder", () => {
    let result = inorderTraverse(tree.root!);
    expect(result).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
  });
  test("postorder", () => {
    let result = postorderTraverse(tree.root!);
    expect(result).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
  });

  test("breadth first search ", () => {
    const tree: TreeNode = {
      value: "A",
      left: {
        value: "B",
        left: {
          value: "D",
          left: {
            value: "G",
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          value: "E",
          left: null,
          right: {
            value: "H",
            right: null,
            left: {
              value: "K",
              left: null,
              right: null,
            },
          },
        },
      },
      right: {
        value: "C",
        left: {
          value: "F",
          left: {
            value: "I",
            left: null,
            right: null,
          },
          right: {
            value: "J",
            left: null,
            right: null,
          },
        },
        right: null,
      },
    };

    expect(breadthFirstSearchTraverse([tree])).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
    ]);
    expect(breadthFirstSearchTraverse2([tree])).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
    ]);
  });
});
