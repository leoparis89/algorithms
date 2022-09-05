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
  }

  if (right && right > current) {
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

  return arr;
};
