export const fibonacci = (n: number) =>
  n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
