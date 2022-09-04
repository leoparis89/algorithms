import { bubbleSort } from "./sorting";

describe("sorting", () => {
  test("bubblesort", () => {
    expect(bubbleSort([4, 1, 3, 2, 11, 4, 9])).toEqual([1, 2, 3, 4, 4, 9, 11]);
  });
});
