export const mergeSort = (arr: number[]) => {
  console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

export const merge = (left: number[], right: number[]) => {
  const sorted: number[] = [];
  let lIndex = 0;
  let rIndex = 0;

  while (lIndex + rIndex < left.length + right.length) {
    const lVal = left[lIndex];
    const rVal = right[rIndex];

    if (lVal === undefined) {
      sorted.push(rVal);
      rIndex++;
    } else if (rVal === undefined) {
      sorted.push(lVal);
      lIndex++;
    } else if (rVal < lVal) {
      sorted.push(rVal);
      rIndex++;
    } else {
      sorted.push(lVal);
      lIndex++;
    }
  }
  return sorted;
};
