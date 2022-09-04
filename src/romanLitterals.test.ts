import { romanToInt, intToRoman } from "./romanLitterals";

test("romanToInt ", () => {
  expect(romanToInt("V")).toEqual(5);
  expect(romanToInt("VI")).toEqual(6);
  expect(romanToInt("LVIII")).toEqual(58);
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});

test("intToRoman ", () => {
  expect(intToRoman(1)).toEqual("I");
  expect(intToRoman(3)).toEqual("III");
  expect(intToRoman(58)).toEqual("LVIII");
  expect(intToRoman(1994)).toEqual("MCMXCIV");
  expect(intToRoman(20)).toEqual("XX");
});
