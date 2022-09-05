export const binarySearch = (sortedNums: number[], target: number) => {
  if (sortedNums.length === 0) {
    return null;
  }

  const middle = Math.floor(sortedNums.length / 2);
  const left = sortedNums.slice(0, middle);
  const right = sortedNums.slice(middle + 1);

  if (sortedNums[middle] == target) return target;

  return sortedNums[middle] > target
    ? binarySearch(left, target)
    : binarySearch(right, target);
};
