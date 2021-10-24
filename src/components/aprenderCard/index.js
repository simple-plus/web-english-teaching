import React, { useState } from "react";

function AprenderCard({ ingles, portugues, mostrar: forceMostrar }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div role="button" onClick={() => setMostrar(true)} className="f-flex flex-fill border m-3 p-2">
      <div className="text-center">
        <h1 className="text-primary">{ingles}</h1>
      </div>
      <div className="text-center">
        <h1 className="text-success" style={{ visibility: forceMostrar || mostrar ? "visible" : "hidden" }}>
          {portugues}
        </h1>
      </div>
    </div>
  );
}

export default AprenderCard;
