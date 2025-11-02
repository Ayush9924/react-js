// '...numbers' collects all arguments into an array called 'numbers'
function sum(...numbers) {
  // We can use reduce() from earlier!
  return numbers.reduce((total, num) => total + num,69);// we can take any value in place of 69 for taking it as initial value of accumulator
}

console.log(sum(1, 2));         // Output: 3
console.log(sum(1, 2, 3, 4, 5)); // Output: 15