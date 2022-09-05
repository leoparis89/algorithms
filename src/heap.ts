export const heapify = (arr: number[], i: number) => {
  const current = arr[i];
  const leftIndex = i * 2 + 1;
  const rightIndex = i * 2 + 2;
  const left = arr[leftIndex];
  const right = arr[rightIndex];

  if (left && left > current) {
    if (right && right > left) {
      // swap right
      arr[i] = right;
      arr[rightIndex] = current;
      heapify(arr, rightIndex);
    } else {
      // swap left
      arr[i] = left;
      arr[leftIndex] = current;
      heapify(arr, leftIndex);
    }
  } else if (right && right > current) {
    if (left && left > right) {
      // swap left
      arr[i] = left;
      arr[leftIndex] = current;
      heapify(arr, leftIndex);
    } else {
      // swap right
      arr[i] = right;
      arr[rightIndex] = current;
      heapify(arr, rightIndex);
    }
  }
};

export const toMaxHeap = (arr: number[]) => {
  const middle = Math.floor(arr.length / 2) - 1;

  for (let i = middle; i >= 0; i--) {
    heapify(arr, i);
  }
  return arr;
};
