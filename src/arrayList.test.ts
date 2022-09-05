import { ArrayList } from "./arrayList";
test("ArrayList", () => {
  let array = new ArrayList();

  array.push("car");
  array.push("dog");
  array.push("train");
  array.push("peanut");
  expect(array.length).toEqual(4);
  expect(array.get(2)).toEqual("train");

  array.pop();
  expect(array.length).toEqual(3);
  expect(array.data).toEqual({ "0": "car", "1": "dog", "2": "train" });

  array.push("plane");
  array.delete(1);

  expect(array.data).toEqual({ "0": "car", "1": "train", "2": "plane" });
});
