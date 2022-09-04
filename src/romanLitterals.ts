let startsWith = (str, searched) => {
  return str.indexOf(searched) === 0;
};

let matchers: Array<[string, number]> = [
  ["IV", 4],
  ["XL", 40],
  ["XC", 90],
  ["CD", 400],
  ["CM", 900],
  ["IX", 9],
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
];

export let romanToInt = (str) => {
  let total = 0;
  let tmp = str;

  do {
    for (let i = 0; i < matchers.length; i++) {
      const [symbol, value] = matchers[i];

      if (startsWith(tmp, symbol)) {
        total += value;
        tmp = tmp.replace(symbol, "");

        break;
      }
    }
  } while (tmp !== "");

  return total;
};

export let intToRoman = (int: number) => {
  let sortedMatchers = [...matchers].sort((a, b) => b[1] - a[1]);
  let total = "";
  let tmp = int;
  do {
    for (let i = 0; i < sortedMatchers.length; i++) {
      const [symbol, value] = sortedMatchers[i];
      if (tmp / value >= 1) {
        total += symbol;
        tmp -= value;

        break;
      }
    }
  } while (tmp > 0);
  return total;
};
