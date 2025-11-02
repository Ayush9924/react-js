const fruits = ['apple', 'banana', 'cherry'];

// Use spread operator to copy the array
const moreFruits = [...fruits, 'mango', 'grape'];

// Now print using forEach
moreFruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index} is ${fruit}`);
});
