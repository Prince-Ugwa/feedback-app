import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

/*
the primary distinction between createRoot and ReactDOM. render is
 that createRoot generates a new root container 
 for rendering components, whereas ReactDOM.render 
 renders components directly to a given DOM element.
*/
