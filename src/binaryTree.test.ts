import { BinarySearchTree, TreeNode } from "./binaryTree";
const makeTutorialTree = () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(8);
  tree.insert(3);
  tree.insert(12);
  tree.insert(17);
  tree.insert(6);
  tree.insert(7);
  return tree;
};

describe("mergeSort", () => {
  test("adding first node", () => {
    let tree = new BinarySearchTree();
    tree.insert(7);

    expect(tree).toEqual({ root: { data: 7, left: null, right: null } });
    // mergeSort(input);
  });

  test("adding multiple nodes", () => {
    let tree = new BinarySearchTree();

    tree.insert(7);
    tree.insert(2);
    tree.insert(8);
    tree.insert(9);

    expect(tree).toEqual({
      root: {
        data: 7,
        left: { data: 2, left: null, right: null },
        right: {
          data: 8,
          left: null,
          right: { data: 9, left: null, right: null },
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
        data: 7,
        left: { data: 2, left: null, right: null },
        right: {
          data: 8,
          left: null,
          right: { data: 9, left: null, right: null },
        },
      },
    });
  });

  test("get", () => {
    let tree = new BinarySearchTree();

    tree.insert(7);
    tree.insert(2);
    tree.insert(8);
    tree.insert(9);

    expect(tree.get(8)).toEqual({
      data: 8,
      left: null,
      right: { data: 9, left: null, right: null },
    });

    expect(tree.get(9)).toEqual({ data: 9, left: null, right: null });
    expect(tree.get(3)).toEqual(null);
  });

  test("getLeastChild ", () => {
    let tree = new BinarySearchTree();

    tree.insert(7);
    tree.insert(2);
    tree.insert(8);
    tree.insert(9);

    expect(tree.getLeastChildByKey(7)).toEqual({
      data: 2,
      left: null,
      right: null,
    });

    expect(tree.getLeastChildByKey(8)).toEqual({
      data: 8,
      left: null,
      right: { data: 9, left: null, right: null },
    });
  });

  test("replace ", () => {
    let tree = new BinarySearchTree();

    tree.insert(7);
    tree.insert(2);
    tree.insert(8);
    tree.insert(9);

    tree.replace(9, null);
    expect(tree).toEqual({
      root: {
        data: 7,
        left: { data: 2, left: null, right: null },
        right: { data: 8, left: null, right: null },
      },
    });

    tree.insert(9);
    let node = new TreeNode(88);
    tree.replace(8, node);
    expect(tree).toEqual({
      root: {
        data: 7,
        left: { data: 2, left: null, right: null },
        right: { data: 88, left: null, right: null },
      },
    });
  });

  describe("delete", () => {
    test("case with no children", () => {
      let tree = makeTutorialTree();

      expect(tree).toEqual({
        root: {
          data: 10,
          left: {
            data: 5,
            left: { data: 3, left: null, right: null },
            right: {
              data: 8,
              left: {
                data: 6,
                left: null,
                right: { data: 7, left: null, right: null },
              },
              right: null,
            },
          },
          right: {
            data: 15,
            left: { data: 12, left: null, right: null },
            right: { data: 17, left: null, right: null },
          },
        },
      });

      tree.delete(7);
      expect(tree).toEqual({
        root: {
          data: 10,
          left: {
            data: 5,
            left: { data: 3, left: null, right: null },
            right: {
              data: 8,
              left: {
                data: 6,
                left: null,
                right: null,
              },
              right: null,
            },
          },
          right: {
            data: 15,
            left: { data: 12, left: null, right: null },
            right: { data: 17, left: null, right: null },
          },
        },
      });

      tree.delete(12);

      expect(tree).toEqual({
        root: {
          data: 10,
          left: {
            data: 5,
            left: { data: 3, left: null, right: null },
            right: {
              data: 8,
              left: {
                data: 6,
                left: null,
                right: null,
              },
              right: null,
            },
          },
          right: {
            data: 15,
            left: null,
            right: { data: 17, left: null, right: null },
          },
        },
      });
    });
  });
});

// describe("merge", () => {
//   expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
// });
