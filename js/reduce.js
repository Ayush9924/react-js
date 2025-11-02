
const numbers = [1, 2, 3, 4, 5,12];
// The 0 is the initial value for 'accumulator'
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);
// Output: 15