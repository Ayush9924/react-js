// create a react componet that checks persons BMI and displays there health status if bmi is less then 18.5 display the mshg underweight if bmi is btwn 18.5 and 24.9 displays normal weitght if bmi is btwn 25 and 29.9 dipslay overwebight else bmi is greater then = 30 dipplay obese


import { createRoot } from "react-dom/client";

function Display() {
    let height = 1.70;
    let weight = 95;
    let bmi = weight / (height * height);

    let message = ""
    if (bmi < 18.5) {
        message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        message = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        message = "Overweight";
    } else {
        message = "Obese";
    }
    return (
        <>
            <h1>BMI Calculator</h1>
            <p>Height: {height} m</p>
            <p>Weight: {weight} kg</p>
            <p>Your BMI: {bmi}</p>
            <h2>Status: {message}</h2>
        </>
    );
}

const root = createRoot(document.getElementById("root")).render(
    <Display />
);

// create a react component that diaplays studeents grades based upon marks. use marks as attribute in the components. if marks > = 90 diplays gradde A if marks greater than = 75 display grade B if amrks greater then = 50 grade C else fail