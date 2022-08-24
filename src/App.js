import { useState, memo, useEffect, useCallback } from "react";
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
  let [color, selectColor] = useState("white");
  let [resetBoard, setResetBoard] = useState(false);

  /// get rid of this, make bonus
  // function restart() {
  //   console.log("restart the darn thing");
  //   setResetBoard(!resetBoard);
  // }

  function chooseColor(color) {
    selectColor(color);
  }

  return (
    <div className="App">
      <header>
        <h1>Sketchpad</h1>
      </header>
      <main>
        <div>
          <h2>Color is {color}</h2>
          {/* <button onClick={restart}>Start over</button> */}
        </div>
        <Sketchpad color={color} resetBoard={resetBoard} />
        <Palette colors={colors} chooseColor={chooseColor} />
      </main>
    </div>
  );
}

export default App;
