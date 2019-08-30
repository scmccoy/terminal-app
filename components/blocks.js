import React from "react";

const Blocks = () => (
  <div className="blocks screen">
    <h1>Blocks</h1>
    <style jsx>{`
      .screen {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .blocks {
        grid-area: blocks;
        border: 2px dashed green;
        height: 400px;
      }
    `}</style>
  </div>
);

export default Blocks;

/*  Blocs Description 
*   _________________
*   ?
*   interactive buttons w/ terminal?
*
*
*/ 