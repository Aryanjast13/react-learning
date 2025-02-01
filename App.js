const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi i am h1 tag from react"),
    React.createElement("h2", {}, "hi i am h2 tag from react"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi i am h1 tag from react"),
    React.createElement("h2", {}, "hi i am h2 tag from react"),
  ]),
]);

console.log(Parent); //then can  the

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
