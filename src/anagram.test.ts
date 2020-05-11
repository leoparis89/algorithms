import { isAna } from "./anagram";

test("isAna should return the right value ", () => {
  expect(isAna("a", "a")).toEqual(true);
  expect(isAna("a", "aa")).toEqual(false);
  expect(isAna("aa", "a")).toEqual(false);
  expect(isAna("a", "ab")).toEqual(false);
  expect(isAna("ab", "ba")).toEqual(true);
  expect(isAna("abc", "ba")).toEqual(false);
  expect(isAna("bb", "ba")).toEqual(false);
  expect(isAna("bba", "bab")).toEqual(true);
});
