import { BinarySearchTree } from "./binaryTree";

describe("mergeSort", () => {
  test("adding first node", () => {
    let tree = new BinarySearchTree();
    tree.insert(7);

    expect(tree).toEqual({ root: 7 });
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
  });
});

// describe("merge", () => {
//   expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
// });
