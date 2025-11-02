const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// Instead of:
// const firstName = user.firstName;
// const age = user.age;

// You can do:
const { firstName, age } = user;

console.log(firstName); // Output: John
console.log(age);       // Output: 30

const coordinates = [10, 20, 30];
const [x, y] = coordinates;

console.log(x); // Output: 10
console.log(y); // Output: 20