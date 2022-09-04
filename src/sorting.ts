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

149;

2911;
export const join = (left: number[], right: number[]) => {
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

  // for (let i = 0; i < left.length; i++) {
  //   for (let j = 0; j < right.length; j++) {
  //     if (left[i] < right[j]) {
  //       result.push(left[i]);
  //       left.splice(i, 1);
  //       i--;
  //     } else {
  //       result.push(right[j]);
  //       right.splice(j, 1);
  //       j--;
  //     }
  //   }
  // }

  return [...result, ...left, ...right];
};

export const mergeSort = (arr) => {};
