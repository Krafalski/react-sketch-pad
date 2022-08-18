import { useState } from "react";
export default function Square({ selectedColor, index }) {
  let [color, setColor] = useState("white");
  function changeColor(color) {
    setColor(color);
  }
  return (
    <div
      key={index}
      onMouseOver={() => changeColor(selectedColor)}
      className="square"
      style={{ backgroundColor: color }}
    ></div>
  );
}
