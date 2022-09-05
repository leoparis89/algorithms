export const heapify = (arr: number[], i: number, heapSize: number) => {
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
      heapify(arr, rightIndex, 0);
    } else {
      // swap left
      arr[i] = left;
      arr[leftIndex] = current;
      heapify(arr, leftIndex, 0);
    }
  } else if (right && right > current) {
    if (left && left > right) {
      // swap left
      arr[i] = left;
      arr[leftIndex] = current;
      heapify(arr, leftIndex, 0);
    } else {
      // swap right
      arr[i] = right;
      arr[rightIndex] = current;
      heapify(arr, rightIndex, 0);
    }
  }
};

export const toMaxHeap = (arr: number[]) => {
  const middle = Math.floor(arr.length / 2) - 1;

  for (let i = middle; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  return arr;
};

const swapPlace = (index1, index2, array) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

export const heapSort = (arr: number[]) => {
  const heap = toMaxHeap(arr);
  console.log("fis", heap);

  for (let i = heap.length - 1; i > 0; i--) {
    swapPlace(0, i, heap);
    // let tmp = heap[i];
    // heap[i] = heap[0];
    // heap[0] = tmp;
    // console.log("calling heapiffy on idex 0", heap);
    // heapify(heap, 0, heapSize);
  }
  return heap;
};
