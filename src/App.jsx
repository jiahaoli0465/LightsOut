import React from "react";
import Board from "./Board";
import "./App.css";
import { useState } from "react";

/** Simple app that just shows the LightsOut game. */

function App() {
  const [size, setSize] = useState(5);

  return (
      <div className="App">
        <h1>Lights Out React</h1>
        <h4>I really don't know how to solve this...</h4>
        <div style={{marginBottom: '50px'}}> 
            <button onClick={() => setSize(3)}>3x3</button>
            <button onClick={() => setSize(5)}>5x5</button>

        </div>
 
        <Board nrows = {size} ncols={size}> </Board>
        
      </div>
  );
}

export default App;
