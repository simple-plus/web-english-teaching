import React from "react";
import Pagina from "../../../components/pagina";

function EscolherTraducao() {
  return (
    <Pagina>
      <h1 className="text-center">Escolha a tradução correta!</h1>
      <div className="mt-5">
        <p className="fs-1 text-center text-primary" id="orig">
          English Word
        </p>
      </div>
      <div className="d-grid gap-2" style={{ maxWidth: 540 }}>
        <button type="button" className="form-control btn btn-success">
          opcao1
        </button>
        <button type="button" className="form-control btn btn-success">
          opcao1
        </button>
        <button type="button" className="form-control btn btn-success">
          opcao1
        </button>
        <button type="button" className="form-control btn btn-success">
          opcao1
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

export default EscolherTraducao;
