import { fibonacci } from "./fibonacci";
test("fibonacci ", () => {
  expect(fibonacci(2)).toEqual(1);
  expect(fibonacci(3)).toEqual(2);
  expect(fibonacci(4)).toEqual(3);
  expect(fibonacci(5)).toEqual(5);
});
