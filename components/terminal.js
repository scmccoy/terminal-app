import React from "react";

const Terminal = () => (
  <div className="terminal screen">
    <h1>Terminal</h1>
    <style jsx>{`
      .screen {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .terminal {
        border: 2px dashed blue;
        grid-area: terminal;
      }
    `}</style>
  </div>
);

export default Terminal;

/*  Terminal Description 
*   ___________________
*   1 grid 
*   continuous printout of data
*   
*
*/ 