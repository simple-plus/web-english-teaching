import React from "react";
import Pagina from "../../components/pagina";

function Estatistica() {
  return (
    <Pagina>
      <h1 className="mx-auto text-center">Top 10</h1>
      <ol className="list-group list-group-numbered mt-5 mx-auto w-75" style={{ minWidth: "fit-content" }}>
        <li className="list-group-item d-flex align-items-center">
          <div className="d-flex flex-fill ms-3">
            <div className="d-flex flex-fill flex-column">
              <div className="d-flex fw-bold">apelido</div>
              <div className="d-flex text-secondary">x contribuições</div>
            </div>
            <div className="d-sm-none d-flex mx-2 bg-secondary" style={{ width: 1 }}></div>
          </div>
          <div className="d-flex">
            <div className="fw-bold me-3">20/90</div>
            <div className="fw-bold">10%</div>
          </div>
        </li>
      </ol>
      <h5 className="text-center mt-5">Eu</h5>
      <ul className="list-group mx-auto w-75" style={{ minWidth: "fit-content" }}>
        <li className="list-group-item d-flex align-items-center">
          <div className="d-flex flex-fill ms-3">
            <div className="d-flex flex-fill flex-column">
              <div className="d-flex fw-bold">apelido</div>
              <div className="d-flex text-secondary">10 contribuições</div>
            </div>
            <div className="d-sm-none d-flex mx-2 bg-secondary" style={{ width: 1 }}></div>
          </div>
        </li>
      </ul>
    </Pagina>
  );
}

export default Estatistica;
