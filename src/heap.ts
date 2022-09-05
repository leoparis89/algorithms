const swapPlace = (index1, index2, array) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

export const heapify = (arr: number[], i: number, heapSize: number) => {
  const left = i * 2 + 1;
  const right = i * 2 + 2;

  let largestValueIndex = i;

  if (left < heapSize && arr[left] > arr[largestValueIndex]) {
    largestValueIndex = left;
  }

  if (right < heapSize && arr[right] > arr[largestValueIndex]) {
    largestValueIndex = right;
  }

  if (largestValueIndex !== i) {
    swapPlace(i, largestValueIndex, arr);
    heapify(arr, largestValueIndex, heapSize);
  }
};

export const toMaxHeap = (arr: number[]) => {
  const middle = Math.floor(arr.length / 2) - 1;

  for (let i = middle; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  return arr;
};

export const heapSort = (arr: number[]) => {
  const heap = toMaxHeap(arr);

  for (let i = heap.length - 1; i > 0; i--) {
    swapPlace(0, i, heap);
    heapify(heap, 0, i);
  }
  return heap;
};
