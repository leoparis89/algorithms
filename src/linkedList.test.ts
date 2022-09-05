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
  array.pop();
  expect(array.head?.value).toEqual("car");

  expect(array.head?.next?.value).toEqual("dog");
  expect(array.tail?.value).toEqual("dog");
  expect(array.length).toEqual(2);

  expect(array.pop()).toEqual("dog");
  expect(array.head?.value).toEqual("car");
  expect(array.tail?.value).toEqual("car");
  expect(array.tail?.next).toEqual(null);

  expect(array.length).toEqual(1);

  array.pop();
  expect(array.head).toEqual(null);
  expect(array.tail).toEqual(null);
  //   expect(array.length).toEqual(0);
});
