import { toMaxHeap, heapSort } from "./heap";

test("toMaxHeap ", () => {
  const initial = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7];
  const heapified = [10, 7, 9, 6, 5, 2, 8, 3, 4, 1];
  expect(toMaxHeap(initial)).toEqual(heapified);
});

test("heapSort", () => {
  const initial = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7];
  expect(heapSort(initial)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
