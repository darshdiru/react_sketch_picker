import "./App.css";
import { SketchPicker } from "react-color";
import { useState } from "react";
import { hexCode } from "./util/hexCodeGenerator";

const App = () => {
  /* state variables one to show picker based on button state and the other one is to capture the change in color */
  const [color, setColor] = useState({ r: "139", g: "87", b: "42", a: "30" });
  const [showButton, setShowButton] = useState(false);

  // destructuring rgba from state
  const { r, g, b, a } = color;

  /* Custom styles applied to the sketch picker. Basically positioning it according to the parent */
  const sketchStyles = {
    default: {
      picker: {
        position: "absolute",
        bottom: "5px",
        left: "150px",
        width: "300px",
      },
    },
  };

  return (
    <div
      style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}
      className="App"
    >
      <header>
        <h2>Welcome to React Color Picker App</h2>
      </header>
      {/* class wrapper to contain picker and the button inside it */}
      <div className="wrapper">
        {showButton && (
          <SketchPicker
            styles={sketchStyles}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.rgb)}
          />
        )}
        <button
          className="pickerButton"
          onClick={() => setShowButton(!showButton)}
        >
          {/* conditionally rendering the text of the button based on the state of showButton*/}
          {showButton ? "Close Color Picker" : "Open Color Picker"}
        </button>
      </div>
      {/* dynamically render the content of the selected color */}
      <h3>You have selected {hexCode(`rgba(${r},${g},${b},${a})`)}</h3>
    </div>
  );
};

export default App;
