import Square from "./Square";

export default function Pad({ grid, updateBoard, selectedColor }) {
  return (
    <div className="sketchpad">
      {grid.map((row, indexX) => {
        return (
          <div key={indexX}>
            {row.map((color, indexY) => {
              // console.log(color, indexX, indexY);
              return (
                <Square
                  x={indexX}
                  y={indexY}
                  selectedColor={selectedColor}
                  updateBoard={updateBoard}
                  key={indexY}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
