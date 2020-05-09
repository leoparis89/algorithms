import { mergeSort, merge } from "./mergeSort";

describe("mergeSort", () => {
  it("should sort arrays", () => {
    const input = [2, 1, 3, 1, 2];
    expect(mergeSort(input)).toEqual([1, 1, 2, 2, 3]);
  });
});

describe("merge", () => {
  expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
});
