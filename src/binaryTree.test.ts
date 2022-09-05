import { BinarySearchTree, TreeNode } from "./binaryTree";
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

// describe("merge", () => {
//   expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
// });
