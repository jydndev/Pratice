function evaluateRPN(tokens) {
  const stack = [];
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(b / a),
  };

  for (const token of tokens) {
    if (token in operators) {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(operators[token](a, b));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
