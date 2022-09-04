import { romanToInt, intToRoman } from "./romanLitterals";

test("romanToInt ", () => {
  expect(romanToInt("V")).toEqual(5);
  expect(romanToInt("VI")).toEqual(6);
  expect(romanToInt("LVIII")).toEqual(58);
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});

test("intToRoman ", () => {
  expect(intToRoman(8)).toEqual(5);
});
