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
