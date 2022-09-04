import { intToRoman } from "./romanLitterals";

test("should ", () => {
  expect(intToRoman("V")).toEqual(5);
  expect(intToRoman("VI")).toEqual(6);
  expect(intToRoman("LVIII")).toEqual(58);
  expect(intToRoman("MCMXCIV")).toEqual(1994);
});
