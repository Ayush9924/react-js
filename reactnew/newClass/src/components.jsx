import React from "react";
import { createRoot } from "react-dom/client";

function Welcome() {
  return (
    <>
      <h1>Hello React users</h1>
      <h1>What are we learning today?</h1>
    </>
  );
}
// export default Welcome;
createRoot(document.getElementById("root")).render(<Welcome />);
