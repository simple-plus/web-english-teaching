import React from "react";
import { Link } from "react-router-dom";

function JogoCard({ titulo, descricao, endereco, logo }) {
  return (
    <Link to={endereco} className="row p-3 mx-auto text-black text-decoration-none" style={{ maxWidth: 720 }}>
      <div className="col-sm-6 col-12 align-self-center">
        <div className="col-12 mx-auto text-align-center">
          <h1 className="text-center">{titulo}</h1>
          <p className="text-center" style={{ lineHeight: "normal" }}>
            {descricao}
          </p>
        </div>
      </div>

      <div className="col-sm-6 col-12 ">
        <img width={"100%"} height={"100%"} src={logo} alt="Descrição do jogo" />
      </div>
      <div className="row mx-auto p-2">
        <Link to={endereco} className="btn btn-danger">
          Jogar
        </Link>
      </div>
    </Link>
  );
}

export default JogoCard;
