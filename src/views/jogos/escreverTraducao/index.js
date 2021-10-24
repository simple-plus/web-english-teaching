import React from "react";
import Pagina from "../../../components/pagina";

function EscreverTraducao() {
  return (
    <Pagina>
      <h1 className="text-center">Escreva a tradução!</h1>
      <div className="mt-5">
        <p className="fs-1 text-center text-primary" id="orig">
          test
        </p>
      </div>
      <div className="mx-auto" style={{ maxWidth: 540 }}>
        <input type="text" className="form-control text-center" placeholder="Tradução" />
        <button type="button" className="btn btn-success form-control mt-3">
          Enviar
        </button>
      </div>
      <div className="mt-5">
        <p className="text-center text-secondary">
          Acertos:
          {/* <span>{indiceAtual > 0 ? Math.floor((100 * acertos) / indiceAtual) : "- "}</span>% */}
        </p>
        <p className="text-center text-secondary">
          Questão:
          {/* <span>{indiceAtual + 1}</span>/<span>10</span> */}
        </p>
      </div>
    </Pagina>
  );
}

export default EscreverTraducao;
