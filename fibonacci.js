function fibonacci(n) {
  if (n <= 1) return n;

  let a = BigInt(0);
  let b = BigInt(1);
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}
