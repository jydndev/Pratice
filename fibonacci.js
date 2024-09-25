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

// fibonacci recursive
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

//  fibonacci Iterative
function fibonacciIterative(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// fibonacci memoized
function fibonacciMemoized(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 1, memo);
  return memo[n];
}
