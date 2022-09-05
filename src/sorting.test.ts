import { bubbleSort, insertionSort, mergeSort, quickSort } from "./sorting";

describe("sorting", () => {
  test("bubblesort", () => {
    expect(bubbleSort([4, 1, 3, 2, 11, 4, 9])).toEqual([1, 2, 3, 4, 4, 9, 11]);
  });

  test("insertionSort ", () => {
    expect(insertionSort([4, 1, 3, 2, 11, 4, 9])).toEqual([
      1, 2, 3, 4, 4, 9, 11,
    ]);
  });

  test("mergetSort ", () => {
    // expect(join([1, 2, 6], [2, 3, 9, 11])).toEqual([1, 2, 2, 3, 6, 9, 11]);
    expect(mergeSort([3, 4, 1, 7, 8, 9, 4])).toEqual([1, 3, 4, 4, 7, 8, 9]);
  });

  test("quickSort ", () => {
    // expect(join([1, 2, 6], [2, 3, 9, 11])).toEqual([1, 2, 2, 3, 6, 9, 11]);
    expect(quickSort([3, 4, 1, 7, 8, 9, 4])).toEqual([1, 3, 4, 4, 7, 8, 9]);
  });
});
