import React, { useState } from "react";
import AprenderCard from "../../components/aprenderCard";
import Pagina from "../../components/pagina";

function Aprender() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <Pagina>
      <h1 className="text-center mt-3">Aprender</h1>
      <div role="button" className="text-center mt-3">
        <input type="checkbox" checked={mostrar} onChange={() => setMostrar(!mostrar)} /> Mostrar todas as traduções
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary">Atualizar Palavras</button>
      </div>
      <div className="d-flex flex-wrap justify-content-center border m-4 p-1">
        <AprenderCard key={`p-${Math.random()}`} ingles="test" portugues="teste" mostrar={mostrar} />
      </div>
    </Pagina>
  );
}

export default Aprender;
