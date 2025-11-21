import React from "react";
import { createRoot } from "react-dom/client";

class Car extends React.Component {
  constructor() {
    super(); // ✅ always call super() first
    this.state = { color: "red" }; // ✅ set initial state
  }

  render() {
    return (
      <>
        <h1>This is my Car Component </h1>
        <h2 style={{ color: this.state.color }}>
          My car color is {this.state.color}
        </h2>
      </>
    );
  }
}

createRoot(document.getElementById("root")).render(<Car />);
