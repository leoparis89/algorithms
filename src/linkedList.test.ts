import { LinkedList } from "./linkedList";

test("linkedList", () => {
  let array = new LinkedList();

  array.push("car");
  array.push("dog");
  array.push("train");
  array.push("peanut");
  expect(array.length).toEqual(4);
  expect(array.get(2)).toEqual("train");

  array.delete(2);
  expect(array.length).toEqual(3);
  expect(array.get(2)).toEqual("peanut");
  expect(array.head?.value).toEqual("car");
  expect(array.tail?.value).toEqual("peanut");
});
