import { createRoot } from 'react-dom/client';

const name = "Aakash";
const regno = 12311105;

const marks = {
    pea: 80,
    cse252: 69,
    cse222: 100,
    mth: 80,
    psy: 75
};

// function to calculate percentage
function getPer(marks) {
    const totalMarks = marks.pea + marks.cse252 + marks.cse222 + marks.mth + marks.psy;
    const percentage = (totalMarks / 500) * 100;
    return percentage;
}

const percentage = getPer(marks);

let message;
if (percentage > 80) {
    message = "Well done!";
} else {
    message = "Study more!";
}


const display = (
    <div>
        <h1>Student Details</h1>
        <h2>Name: {name}</h2>
        <h2>Reg No: {regno}</h2>
        <h3>Marks:</h3>

        <h2>PEA: {marks.pea}</h2>
        <h2>CSE252: {marks.cse252}</h2>
        <h2>CSE222: {marks.cse222}</h2>
        <h2>Maths: {marks.mth}</h2>
        <h2>Psychology: {marks.psy}</h2>

        <h2>Percentage: {percentage.toFixed(2)}%</h2>
        <h2>Result: {message}</h2>
    </div>
);

createRoot(document.getElementById('root')).render(display);
