import React from "react";

function ConfirmarCard({ ingles, portugues }) {
  return (
    <div className="m-2">
      <div className="card" style={{ minWidth: "14rem" }}>
        <div className="row mt-2 ps-4 pe-4">
          <div className="col">Inglês:</div>
          <div className="col text-primary">{ingles}</div>
        </div>
        <div className="row mt-2 ps-4 pe-4">
          <div className="col">Português:</div>
          <div className="col text-primary">{portugues}</div>
        </div>
        <div className="d-flex d-fill justify-content-around p-3">
          <div role="button">
            <i className="bi bi-x-circle-fill text-danger fs-2"></i>
          </div>
          <div role="button">
            <i className="bi bi-check-circle-fill text-success fs-2"></i>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ConfirmarCard;
