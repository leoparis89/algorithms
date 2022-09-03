const _getNeighbors = (from, to) => (id) => {
  const result = [];
  from.forEach((val, i) => {
    if (val === id) {
      result.push(to[i]);
    }
  });
  to.forEach((val, i) => {
    if (val === id) {
      result.push(from[i]);
    }
  });
  return result;
};
test("getNeighbors ", () => {
  const getNeighbors = _getNeighbors([1, 1, 4], [2, 3, 2]);
  expect(getNeighbors(1)).toEqual([2, 3]);
  expect(getNeighbors(4)).toEqual([2]);
  expect(getNeighbors(3)).toEqual([1]);
});

const bfs = (from, to, start) => {
  const getNeighbors = _getNeighbors(from, to);

  const queue = [start];

  const visited = [];
  visited[start] = true;

  while (queue.length) {
    const current = queue.shift();

    const next = getNeighbors(current);
    next.forEach((node) => {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
      }
    });
  }
};

test("bfs", () => {
  const from = [1, 1, 2, 3];
  const to = [2, 3, 4, 5];
  bfs(from, to, 1);
});
