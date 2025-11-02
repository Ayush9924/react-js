const set = new Set(['apple', 'banana', 'cherry','straweberry','lemon','banana', 'nothing']);
const fruits = Array.from(set);
console.log(fruits); 


// Remove duplicates easily
const numbers = [1, 2, 2, 3, 3, 4];
const unique = Array.from(new Set(numbers));
console.log(unique); // [1, 2, 3, 4]

// Clone an existing array
const arr1 = [10, 20, 30];
const arr2 = Array.from(arr1);
arr2.push(40);
console.log(arr1); // [10, 20, 30]
console.log(arr2); // [10, 20, 30, 40]


// Use the mapping function (2nd argument)

// You can transform elements while creating the array.

const numbers1 = Array.from([1, 2, 3, 4], x => x * 2);
console.log(numbers1); // [2, 4, 6, 8]