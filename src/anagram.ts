export const isAna = (s1: string, s2: string) => {
  if (s1.length !== s2.length) {
    return false;
  }
  for (const char of s1.split("")) {
    const i = s2.indexOf(char);

    if (i === -1) {
      return false;
    } else {
      s2 = s2.slice(0, i) + s2.slice(i + 1);
    }
  }
  return true;
};
