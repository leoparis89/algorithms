export const getSubset = (arr: any[], acc: any[] = []) => {
  for (let i = 0; i < arr.length; i++) {
    // for (let j = i + 2; i < arr.length; i++) {

    // }
    for (let j = i; j < arr.length; j++) {
      // for (let j = i + 2; i < arr.length; i++) {
      // }
      acc.push([arr[i], arr[j]]);
    }
  }
  //   const combine = (arr, result) => {};
  return acc;
};

// var combine = function(a) {
//   var fn = function(n, src, got, all) {
//     if (n == 0) {
//       if (got.length > 0) {
//         all[all.length] = got;
//       }
//       return;
//     }

//     for (var j = 0; j < src.length; j++) {
//       fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
//     }

//     return;
//   };

//   var all = [];

//   for (var i = 0; i < a.length; i++) {
//     fn(i, a, [], all);
//   }
//   all.push(a);
//   return all;
// };

const printCombos = (arr, size, r) => {
  // A temporary array to store
  // all combination one by one
  const data = [];

  // Print all combination using
  // temprary array 'data[]'
  combinationUtil(arr, data, 0, size - 1, 0, r);
};

const combinationUtil = (arr, data, start, end, index, r) => {
  if (index === r) {
    console.log("-----");
    for (let j = 0; j < r; j++) {
      console.log(data[j]);
    }
  }
  // replace index with all possible
  // elements. The condition "end-i+1 >= r-index"
  // makes sure that including one element
  // at index will make a combination with
  // remaining elements at remaining positions
  for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
    data[index] = arr[i];
    combinationUtil(arr, data, i + 1, end, index + 1, r);
  }
};

test("subsetNonAdjacentEls should return the right value", () => {
  //   expect(getSubset([1, 2, 3, 4])).toEqual("foo");
  printCombos([1, 2, 3, 4], 4, 3);
});
