let startsWith = (str, searched) => {
  return str.indexOf(searched) === 0;
};

let matchers = [
  ["IV", 4],
  ["IX", 9],
  ["XL", 50],
  ["XC", 90],
  ["CD", 400],
  ["CM", 900],
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
];

export let getVal = (str) => {
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
