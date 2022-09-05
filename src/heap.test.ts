import { heapify, toMaxHeap } from "./heap";

heapify;
test("heapify ", () => {
  const initial = [5, 3, 2, 10, 1, 9, 8, 6, 4, 7];
  expect(toMaxHeap(initial)).toEqual("");
});
