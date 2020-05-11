import { mergeSort, merge, getInversionCount } from "./mergeSort";

describe("mergeSort", () => {
  it("should sort arrays", () => {
    const input = [2, 1, 3, 1, 2];
    const input2 = [7, 5, 3, 1];
    const input3 = [1, 5, 3, 7];
    expect(mergeSort(input)).toEqual([1, 1, 2, 2, 3]);
    // mergeSort(input);
  });
});

test("getInversionCount ", () => {
  const input = [2, 1, 3, 1, 2];
  const input2 = [7, 5, 3, 1];
  const input3 = [1, 5, 3, 7];
  expect(getInversionCount(input)).toEqual(4);
  expect(getInversionCount(input2)).toEqual(6);
  expect(getInversionCount(input3)).toEqual(1);
});
// describe("merge", () => {
//   expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
// });
