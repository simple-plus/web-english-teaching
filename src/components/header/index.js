import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";

function Header() {
  const { usuarioLogado, usuarioApelido, authSair } = useContext(AuthContext);

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-around py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <i className="bi bi-book-fill fs-2"></i>
      </Link>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center align-items-center text-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-3 link-dark">
            Início
          </Link>
        </li>
        <li>
          <Link to="/aprender" className="nav-link px-3 link-dark">
            Aprender
          </Link>
        </li>

        <li className="nav-item dropdown">
          <span className="nav-link link-dark dropdown-toggle" role="button" data-bs-toggle="dropdown">
            Contribuir
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to="/colaborar/adicionar" className="dropdown-item">
                Adicionar Palavra
              </Link>
            </li>

            <li>
              <Link to="/colaborar/confirmar" className="dropdown-item">
                Confirmar Palavra
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/estatistica" className="nav-link px-3 link-dark">
            Estatísticas
          </Link>
        </li>
      </ul>

      {usuarioLogado ? (
        <div className="d-flex align-items-center justify-content-center col-md-3 text-center">
          <span className="me-3 text-primary">{usuarioApelido}</span>
          <Link to="/conta/configuracoes">
            <i className="bi bi-gear-fill text-dark fs-3"></i>
          </Link>
          <div role="button" className="ms-3" onClick={authSair}>
            <i className="bi bi-box-arrow-right fs-3"></i>
          </div>
        </div>
      ) : (
        <div className="col-md-3 text-center">
          <Link to="/conta/entrar" type="button" className="btn btn-outline-primary me-2">
            Entrar
          </Link>
          <Link to="/conta/cadastrar" type="button" className="btn btn-primary">
            Cadastrar
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
