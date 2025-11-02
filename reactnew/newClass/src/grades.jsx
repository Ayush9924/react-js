// create a react component that diaplays studeents grades based upon marks. use marks as attribute in the components. if marks > = 90 diplays gradde A if marks greater than = 75 display grade B if amrks greater then = 50 grade C else fail

import { createRoot } from "react-dom/client";

function Grade(props) {
  let grade;

  if (props.marks >= 90) {
    grade = "A";
  } else if (props.marks >= 75) {
    grade = "B";
  } else if (props.marks >= 50) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  return (
    <div>
      <h2>Student Grade</h2>
      <p>Marks: {props.marks}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Grade marks={92} />
      <Grade marks={78} />
      <Grade marks={60} />
      <Grade marks={45} />
    </>
  );
}

const root = createRoot(document.getElementById("root")).render(<App />);
