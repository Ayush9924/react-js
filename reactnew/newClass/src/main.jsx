import { createRoot } from "react-dom/client";

function Car() {
  const myfunc = () => {
    alert("Hello World");
  };

  return (
    <button onClick={myfunc} disabled={false}>Click me</button>
  );
}

createRoot(document.getElementById("root")).render(<Car />);
