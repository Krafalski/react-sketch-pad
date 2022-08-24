import { useState, useEffect } from "react";
import Square from "./Square";

export default function Pad({ color, resetBoard }) {
  const newBoard = new Array(2500).fill("white");
  const [board, setBoard] = useState([]);
  function generateBoard() {
    setBoard(newBoard);
  }

  useEffect(() => {
    if (board.length === 2500) {
      setBoard(newBoard);
    } else {
      generateBoard();
    }
  }, [resetBoard, board.length]);
  return (
    <>
      <div className="sketchpad">
        {board.map((square, index) => {
          return (
            <Square selectedColor={color} key={index} resetBoard={resetBoard} />
          );
        })}
      </div>
    </>
  );
}
