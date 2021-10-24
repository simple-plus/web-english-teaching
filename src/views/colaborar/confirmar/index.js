import React, { useContext } from "react";
import Pagina from "../../../components/pagina";
import ConfirmarCard from "../../../components/confirmarCard";
import AuthContext from "../../../contexts/auth";

function ConfirmarPalavra() {
  const { usuarioLogado } = useContext(AuthContext);
  return (
    <Pagina>
      <h1 className="text-center">Confirmar palavras</h1>
      {!usuarioLogado && <span className="text-center text-danger">Para contribir entre na sua conta!</span>}
      <div className="text-secondary mx-auto p-5" style={{ width: "fit-content" }}>
        <span>Observações</span>
        <ol>
          <li>Verificar se a tradução está correta.</li>
          <li>Verificar se a palavra em qualquer idioma está com a ortografica correta</li>
          <li>Verificar se o idioma está correspondente à palavra.</li>
        </ol>
      </div>
      <div className="d-flex flex-wrap justify-content-center m-4 p-1">
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
        <ConfirmarCard ingles="test" portugues="teste" />
      </div>
    </Pagina>
  );
}
export default ConfirmarPalavra;
