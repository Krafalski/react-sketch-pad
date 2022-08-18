import Square from "./Square";

export default function Pad({ color, board }) {
  return (
    <div className="sketchpad">
      {board.map((square, index) => {
        return (
          <Square
            index={index}
            selectedColor={color}
            key={`${color}${index}`}
          />
        );
      })}
    </div>
  );
}
