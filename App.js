import React from "react";
import ReactDOM from "react-dom/client";

const Parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "namste react by akshay saini"),
    React.createElement("h2", {}, "hi"),
  ])
);

console.log(Parent); //then can  the

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
//ohffk
