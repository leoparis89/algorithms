import { fibonacci } from "./fibonacci";
test("fibonacci ", () => {
  expect(fibonacci(1)).toEqual(1);
  expect(fibonacci(6)).toEqual(13);
});
