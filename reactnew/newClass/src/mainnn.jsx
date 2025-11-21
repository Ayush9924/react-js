import React from "react";
import { createRoot } from "react-dom/client";
import Car from "./props"; // Importing Car component

const root = createRoot(document.getElementById("root"));

root.render(
  <Car 
    color="red" 
    model="mustang" 
    brands="ford" 
  />
);
