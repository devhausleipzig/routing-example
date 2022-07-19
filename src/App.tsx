import React, { useState } from "react";
import Button from "./Button";
import ColoredDiv from "./ColoredDiv";
import Label from "./Label";
function App() {
  const colors = ["orange", "red", "green", "yellow", "blue"];
  const [color, setColor] = useState(colors[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  function renderP() {
    if (color === "red") {
      return <p style={{ color: "red" }}>The Color is red</p>;
    }
  }

  return (
    <React.Fragment>
      <div onDragStart={(e) => console.log(e.clientX)}>asd</div>
      <ColoredDiv color={color} id="Div" />
      {color === "red" ? (
        <p style={{ color: "red" }}>The Color is red</p>
      ) : null}
      <Button clickHandler={handleClick} id="ChangeButton">
        <Label>Change Color</Label>
      </Button>
      <Button clickHandler={() => console.log(color)} id="LogButton">
        Log Color
      </Button>
      <Button clickHandler={() => alert("Hello")}>Say Hello</Button>
    </React.Fragment>
  );
}

export default App;
// React.createElement(
//   "div",
//   {
//     style: {
//       backgroundColor: "red",
//     },
//   },
//   React.createElement("span", { style: { color: "green" } }, "Hello")
