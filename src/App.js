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
  "mediumorchid",
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
  const newBoard = new Array(2).fill(new Array(2).fill("white"));
  let [color, selectColor] = useState("white");
  let [board, setBoard] = useState([]);
  let [resetBoard, setResetBoard] = useState(false);
  function chooseColor(color) {
    selectColor(color);
  }

  function updateBoard(selectedColor, x, y) {
    console.log(selectedColor);
    const boardToUpdate = [...newBoard];
    console.log("this is boardToUpdate", boardToUpdate);
    boardToUpdate[x][y] = selectedColor;
    console.log(boardToUpdate);
    setBoard((prevState) => {
      return { ...prevState, boardToUpdate };
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Sketchpad</h1>
      </header>
      <main>
        <div>
          <h2>Color is {color}</h2>
          {/* <button onClick={generateBoard}>Start over</button> */}
        </div>

        <Sketchpad
          selectedColor={color}
          grid={newBoard}
          updateBoard={updateBoard}
        />
        <Palette colors={colors} chooseColor={chooseColor} />
      </main>
    </div>
  );
}

export default App;
