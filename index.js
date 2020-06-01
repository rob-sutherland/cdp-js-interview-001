import React from "react";
import { render } from "react-dom";

const randomNumberInRange = function(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
}

const App = () => { 
  return (
    <div>
      Hello! Write the code to complete this assignment in the index.js file.
    </div>
  );
};

render(<App />, document.getElementById("root"));
