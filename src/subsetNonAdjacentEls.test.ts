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

const travers = (arr: number[], offset, depth, target, acc = []) => {
  if (depth === target) {
    console.log("GAOLR2");
    console.log(acc);
    acc.pop();
    return;
  }
  // if (current === depth) {
  //   return;
  // }
  // for (let i = offset; i < arr.length; i++) {
  //   // console.log(arr[i], "depth", depth, "target", target);
  //   acc.push(arr[i]);
  //   travers(arr, i + 1, depth + 1, target, acc);
  //   // travers(arr);
  //   // console.log(arr[i]);
  //   // for (let j = i + 1; j < arr.length; j++) {
  //   //   // console.log(arr[i] arr[j]);
  //   //   for (let k = j + 1; k < arr.length; k++) {
  //   //     // console.log(arr[i] arr[j]);
  //   //     console.log(`${arr[i]}-${arr[j]}-${arr[k]}`);
  //   //   }
  //   // }
  for (let i = offset; i < arr.length; i++) {
    // console.log("r-" + depth);
    if (i === arr.length - 1) {
      arr.pop();
    } else {
      acc.push(arr[i]);
    }
    travers(arr, i + 1, depth + 1, target, acc);
  }
  // for (let i = 0; i < arr.length; i++) {
  //   console.log("depth", 0);
  //   for (let j = i + 1; j < arr.length; j++) {
  //     console.log("depth", 1);
  //     // console.log(arr[i] arr[j]);
  //     // for (let k = j + 1; k < arr.length; k++) {
  //     //   // console.log(arr[i] arr[j]);
  //     //   // console.log("depth", 2);
  //     //   console.log(`${arr[i]}-${arr[j]}-${arr[k]}`);
  //     // }
  //   }
  // }
  // }
};
const traversNaive = arr => {
  for (let i = 0; i < arr.length; i++) {
    // console.log("n depth", 0);
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(`${arr[i]}-${arr[j]}`);
      for (let l = j + 1; l < arr.length; l++) {
        // console.log("GOAL");
        console.log(`${arr[i]}-${arr[j]}-${arr[l]}`);
      }
    }
  }
};
const traversFinal = (arr: number[], offset, depth) => {
  const acc: number[] = [];
  travers(arr, 0, 0, 1);
};

test("subsetNonAdjacentEls should return the right value", () => {
  //   expect(getSubset([1, 2, 3, 4])).toEqual("foo");
  // traversFinal([1, 2, 3], 0, 1);
  const input = [1, 2, 3, 4];
  traversNaive(input);
  travers(input, 0, 0, 3);
});
