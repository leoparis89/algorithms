
import { BinarySearchTree } from "./binaryTree";

describe("mergeSort", () => {
    test("adding first node", () => {
        let tree = new BinarySearchTree()
        tree.insert(7)

        expect(tree).toEqual({ "root": 7 })
        // mergeSort(input);
    });
});

// describe("merge", () => {
//   expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
// });
