// function to show the n-th number of the fibonacci sequence
const fib = (number) => {
  if (number < 2) return 1;
  return fib(number - 1) + fib(number - 2);
};

console.log(fib(1));
