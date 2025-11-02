import { createRoot } from 'react-dom/client';

const name = "Akash";
const birth = 2005;
const currentYear = new Date().getFullYear();
const age = currentYear - birth;

const display = (
  <div>
    <h1>Hello {name}</h1>
    <h2>Age: {age}</h2>
    <h2>Current Year: {currentYear}</h2>
    <h2>Birth Year: {birth}</h2>
  </div>
);

// Corrected root element ID and method chaining
createRoot(document.getElementById('root')).render(display);


// function User() {
    //   return (
//     <>
//       <h1>User Details</h1>
//       <p>Name:{name}</p>
//       <p>Birth Year: {birth}</p>
//       <p>Current Year: {currentYear}</p>
//       <p>Age: {age}</p>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
// <User />
// );


// create a program using jsx expression that displays the student details like name , req num, marks in 5 subject. calculate the % of student and if the % is more then 80% then display weldone other wise display study more