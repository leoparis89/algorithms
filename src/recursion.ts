export const nestedAdd = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += nestedAdd(arr[i]);
    } else {
      sum += arr[i];
    }
  }

  return sum;
};
