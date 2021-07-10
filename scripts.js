/**-------------------------------
 * fibonacci sequence
 * write a function, fib(n) that takes a number as an argument and return the n-th
 * number of the fibonacci sequence.
 * -------------------------------
 * solution
 * first and second numbers in the sequence are 1
 * like so: 1, 1, 2, 3, 4, 8 ...
 */
// slow function
// const fib = (number) => {
//   if (number < 2) return 1;
//   return fib(number - 1) + fib(number - 2);
// };

// fast function - better approach = memoization
// the argument that will be passed at the function call
// will be the key of the memo object and the value will be
// the return value of the fib function
const fib = (number, memo = {}) => {
  // setup base cases
  if (number in memo) return memo[number];
  if (number <= 2) return 1;
  // store fib sequence value in memo
  memo[number] = fib(number - 1, memo) + fib(number - 2, memo);
  // return the fib sequence
  return memo[number];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

//-------- checking for key evistence in objects
// const obj = {
//   fname: "Zacc",
//   age: 29,
//   color: "dark",
// };

// if ("fname" in obj) {
//   console.log(obj);
// }
//-------- checking for key evistence in objects
