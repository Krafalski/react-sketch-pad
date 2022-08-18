import { useEffect, useState } from "react";
import "./App.css";
import Sketchpad from "./components/Sketchpad";
import Palette from "./components/ColorPalette";

const colors = [
  "lightyellow",
  "yellow",
  "orange",
  "orangered",
  "deeppink",
  "mediumvioletred",
  "mediumpurple",
  "blueviolet",
  "indigo",
  "steelblue",
  "dodgerblue",
  "mediumaquamarine",
  "darkseagreen",
  "olivedrab",
  "green",
  "burlywood",
  "peru",
  "saddlebrown",
  "white",
  "silver",
];

function App() {
  const newBoard = new Array(2500).fill("white");
  let [color, selectColor] = useState("white");
  let [board, setBoard] = useState([]);

  function chooseColor(color) {
    selectColor(color);
  }

  function generateBoard() {
    setBoard(newBoard);
  }

  function restart() {
    // setBoard([]);
  }

  useEffect(() => {
    generateBoard();
    console.log(board.length);
  }, [board[0]]);

  return (
    <div className="App">
      <header>
        <h1>Sketchpad</h1>
      </header>
      <main>
        <div>
          <h2>Color is {color}</h2>
          <button onClick={restart}>Start over</button>
        </div>

        <Sketchpad color={color} board={board} />
        <Palette colors={colors} chooseColor={chooseColor} />
      </main>
    </div>
  );
}

export default App;
