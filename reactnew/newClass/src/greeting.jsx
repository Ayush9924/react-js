import { createRoot } from "react-dom/client";

function Display() {
  const currentTime = new Date().getHours(); 
  let message = "";

  if (currentTime < 12) {
    message = "Good Morning!";
  } else if (currentTime >= 12 && currentTime < 18) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }

  return <h1>{message} and the current time is {currentTime}</h1>;
  
}

createRoot(document.getElementById("root")).render(
<Display />
);

// create a react componet that checks persons BMI and displays there health status if bmi is less then 18.5 display the mshg underweight if bmi is btwn 18.5 and 24.9 displays normal weitght if bmi is btwn 25 and 29.9 dipslay overwebight else bmi is greater then = 30 dipplay obese