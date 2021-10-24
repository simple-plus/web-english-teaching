import React, { useState, useContext } from "react";
import Pagina from "../../../components/pagina";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../../../contexts/auth";
import Spinner from "../../../components/spinner";

function Cadastrar() {
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState(null);

  const { authCadastrar, usuarioLogado } = useContext(AuthContext);

  function callback(mensagem_erro) {
    setMensagemErro(mensagem_erro);
    setCarregando(false);
  }

  if (usuarioLogado) {
    return <Redirect to="/" />;
  }

  return (
    <Pagina>
      <h1 className="text-center mb-2">Cadastrar</h1>
      <form className="d-grid gap-2 form-control-lg w-100" style={{ maxWidth: 420 }}>
        <div>
          <label className="form-label">Apelido</label>
          <input value={apelido} onChange={(e) => setApelido(e.target.value)} type="text" className="form-control" />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
        </div>
        <div>
          <label className="form-label">Senha</label>
          <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" />
        </div>
        <div>
          <label className="form-label">Confirmar senha</label>
          <input
            value={confirmacaoSenha}
            onChange={(e) => setConfirmacaoSenha(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        {carregando ? (
          <Spinner />
        ) : (
          <>
            <Link to="/conta/entrar" type="button" className="btn btn-secondary opacity-50 form-control">
              Entrar
            </Link>
            <button
              type="button"
              className="btn btn-primary form-control"
              onClick={() => {
                setCarregando(true);
                authCadastrar(apelido, email, senha, confirmacaoSenha, callback);
              }}
            >
              Cadastrar
            </button>
          </>
        )}
        {mensagemErro !== null && <span className="text-danger text-center">{mensagemErro}</span>}
      </form>
    </Pagina>
  );
}
export default Cadastrar;
