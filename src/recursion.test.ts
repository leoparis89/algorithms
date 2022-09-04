import { nestedAdd } from "./recursion";
test("nestedAdd ", () => {
  let input = [1, [3, 4, [3, 3]], 4, [1], [[[[9]]], 1]];
  expect(nestedAdd(input)).toEqual(29);
});
