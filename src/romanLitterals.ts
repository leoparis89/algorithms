let startsWith = (str, searched) => {
  return str.indexOf(searched) === 0;
};

let matchers = [
  ["I", 1],
  ["IV", 4],
  ["V", 5],
  ["IX", 9],
  ["X", 10],
  ["XL", 40],
  ["L", 50],
  ["XC", 90],
  ["C", 100],
  ["CD", 400],
  ["D", 500],
  ["CM", 900],
  ["M", 1000],
];

export let intToRoman = (str) => {
  let total = 0;
  let tmp = str;

  do {
    for (let i = 0; i < matchers.length; i++) {
      const [symbol, value] = matchers[i];

      if (startsWith(tmp, symbol)) {
        total += value as number;
        tmp = tmp.replace(symbol, "");

        break;
      }
    }
  } while (tmp !== "");

  return total;
};
