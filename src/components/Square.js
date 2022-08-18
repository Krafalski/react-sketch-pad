export default function Square({ selectedColor, x, y, updateBoard, color }) {
  function changeColor(color, x, y) {
    // console.log("this is selected color", selectedColor);
    // console.log(color);
    updateBoard(color, x, y);
  }

  return (
    <div
      key={`${x}${y}`}
      onMouseOver={() => changeColor(selectedColor, x, y)}
      className="square"
      style={{ backgroundColor: color }}
    ></div>
  );
}
