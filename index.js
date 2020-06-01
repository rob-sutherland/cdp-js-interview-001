import React from "react";
import { render } from "react-dom";

// returns an random interger in the interval [min, max]
const randomNumberInRange = function(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
}

const App = () => { 
  return (
    <div>
      Hello! Write the code to implement the requirements in index.js.
    </div>
  );
};

render(<App />, document.getElementById("root"));
