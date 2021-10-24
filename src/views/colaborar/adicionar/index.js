import React, { useContext, useRef } from "react";
import { useState } from "react/cjs/react.development";
import Pagina from "../../../components/pagina";
import AuthContext from "../../../contexts/auth";

function AdicionarPalavra() {
  const inputPalavraIngles = useRef();
  const inputPalavraPortugues = useRef();
  const [palavraIngles, setPalavraIngles] = useState("");
  const [palavraPortugues, setPalavraPortugues] = useState("");

  const { usuarioLogado } = useContext(AuthContext);

  function enviarPalavra() {
    console.log("Enviando palavra", palavraIngles, palavraPortugues);
    setPalavraIngles("");
    setPalavraPortugues("");
  }

  function onKeyDownPalavra(key, is_english) {
    if (key !== "Enter") return;
    if (is_english) {
      inputPalavraPortugues.current.focus();
    } else {
      enviarPalavra();
      inputPalavraIngles.current.focus();
    }
  }

  return (
    <Pagina>
      <h1 className="text-center">Adicionar palavra</h1>

      {!usuarioLogado && <span className="text-center text-danger">Para contribir entre na sua conta!</span>}
      <form className="form-control-lg w-100 d-grid gap-3" style={{ maxWidth: 420 }}>
        <div>
          <label className="form-label">Palavra em Ingles</label>
          <input
            ref={inputPalavraIngles}
            onKeyDown={(e) => onKeyDownPalavra(e.key, true)}
            onChange={(e) => setPalavraIngles(e.target.value)}
            value={palavraIngles}
            autoFocus
            className="form-control"
            type="text"
            disabled={!usuarioLogado}
          />
        </div>
        <div>
          <label className="form-label">Palavra em Português</label>
          <input
            ref={inputPalavraPortugues}
            onKeyDown={(e) => onKeyDownPalavra(e.key, false)}
            onChange={(e) => setPalavraPortugues(e.target.value)}
            value={palavraPortugues}
            className="form-control"
            type="text"
            disabled={!usuarioLogado}
          />
        </div>
        <div>
          <label className="form-label">Palavra em Português</label>
          <button type="button" className="btn btn-primary form-control" onClick={() => enviarPalavra()}>
            Enviar palavra
          </button>
        </div>

        <div className="text-secondary">
          <span>Observações</span>
          <ol>
            <li>A tradução deve ser de forma literal.</li>
            <li>Ambas as palavras devem estar corretamente acentuadas</li>
          </ol>
        </div>
      </form>
    </Pagina>
  );
}
export default AdicionarPalavra;
