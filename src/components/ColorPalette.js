export default function Palette({ colors, chooseColor }) {
  return (
    <div>
      <h2>Palette</h2>
      <div className="palette">
        {colors.map((color) => {
          return (
            <div
              key={color}
              style={{ backgroundColor: color, height: "40px", width: "40px" }}
              onClick={() => chooseColor(color)}
            />
          );
        })}
      </div>
    </div>
  );
}
