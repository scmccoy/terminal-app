import React from "react";

const Visuals = () => (
  <div className="visuals screen">
    <h1>Visuals</h1>
    <style jsx>{`
      .screen {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .visuals {
        grid-area: visuals;
        border: 2px dashed red;
        height: 400px;
      }
    `}</style>
  </div>
);

export default Visuals;


/*  Visuals Description 
*   ___________________
*   2 grid 
*   Image - head shot
*   Static text - description next to image
*   static blink in and out. replace with multiple images
*   overlay - deceased/found/updates randomly
*   whitish/bluish coloring
*
*
*/ 