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

    let inserted = false;

    let j = i - 1;

    while (!inserted) {
      if (result[j] > toInsert) {
        result[j + 1] = result[j];
      } else {
        result[j + 1] = toInsert;
        inserted = true;
      }
      j--;
    }
  }

  return result;
};
