const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'pussy'}
];
const userBob = users.find(find => find.id === 4);

console.log(userBob);
