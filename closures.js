// create a counter function that increments each time it's called
const createCounter = () => {
  let count = 0;
  return function () {
    return ++count;
  };
};

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
