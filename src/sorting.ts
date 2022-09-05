export const bubbleSort = (arr: number[]) => {
  let result = [...arr];
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return result;
};

export const insertionSort = (arr: number[]) => {
  let result = [...arr];

  for (let i = 1; i < result.length; i++) {
    let toInsert = result[i];

    let j;

    for (j = i - 1; j >= 0 && result[j] > toInsert; j--) {
      result[j + 1] = result[j];
    }

    result[j + 1] = toInsert;
  }

  return result;
};

const join = (left: number[], right: number[]) => {
  left = [...left];
  right = [...right];

  let result: number[] = [];

  while (left.length > 0 && right.length > 0) {
    const leftHead = left[0];
    const rightHed = right[0];

    if (leftHead < rightHed) {
      result.push(leftHead);
      left.shift();
    } else {
      result.push(rightHed);
      right.shift();
    }
  }

  return [...result, ...left, ...right];
};

export const mergeSort = (arr: number[]) => {
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  if (arr.length == 1) {
    return arr;
  }

  return join(mergeSort(left), mergeSort(right));
};
