import { bubbleSort, insertionSort, join } from "./sorting";

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
    expect(join([1, 2, 6], [2, 3, 9, 11])).toEqual([1, 2, 2, 3, 6, 9, 11]);
  });
});
