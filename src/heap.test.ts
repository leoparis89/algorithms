import { heapify, toMaxHeap } from "./heap";

heapify;
test("heapify ", () => {
  const initial = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7];
  const heapified = [10, 7, 9, 6, 5, 2, 8, 3, 4, 1];
  expect(toMaxHeap(initial)).toEqual(heapified);
});
