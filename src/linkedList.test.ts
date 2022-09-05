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

describe("LinkedList", function () {
  const range = (length) =>
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("constructor", () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  test("push", () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });

  test("pop", () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual("c");
  });

  test("get", () => {
    list.push("first");
    expect(list.get(0)).toEqual("first");
    list.push("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  test("delete", () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("m");
    expect(list.get(13)).toEqual("o");
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
});
