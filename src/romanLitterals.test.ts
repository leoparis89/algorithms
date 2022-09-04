import { romanToInt } from "./romanLitterals";

test("should ", () => {
  expect(romanToInt("V")).toEqual(5);
  expect(romanToInt("VI")).toEqual(6);
  expect(romanToInt("LVIII")).toEqual(58);
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});
