import { LinkedList } from "./linkedList";

test("linkedList", () => {
  let array = new LinkedList();

  array.push("car");
  array.push("dog");
  array.push("train");
  array.push("peanut");
  expect(array.length).toEqual(4);
  expect(array.get(2)).toEqual("train");
});
