import { binarySearch } from "./binarySearch";

test("binarySearch", () => {
  const sorted = [1, 2, 3, 5, 6, 10, 100, 102, 105, 2000];
  expect(binarySearch(sorted, 3)).toEqual(3);
  expect(binarySearch(sorted, 10)).toEqual(10);
  expect(binarySearch(sorted, 15)).toEqual(null);
});
