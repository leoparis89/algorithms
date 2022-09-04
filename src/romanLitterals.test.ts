import { getVal } from "./romanLitterals";

test("should ", () => {
  expect(getVal("V")).toEqual(5);
  expect(getVal("VI")).toEqual(6);
  expect(getVal("LVIII")).toEqual(58);
  expect(getVal("MCMXCIV")).toEqual(1994);
});
