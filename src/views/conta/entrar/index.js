import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Pagina from "../../../components/pagina";
import Spinner from "../../../components/spinner";
import AuthContext from "../../../contexts/auth";

function Entrar() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState(null);

  const { authEntrar, usuarioLogado } = useContext(AuthContext);

  function callback(mensagem_erro) {
    setMensagemErro(mensagem_erro);
    setCarregando(false);
  }

  if (usuarioLogado) {
    return <Redirect to="/" />;
  }

  return (
    <Pagina>
      <h1 className="text-center mb-2">Entrar</h1>
      <form className="d-grid gap-2 form-control-lg w-100" style={{ maxWidth: 420 }}>
        <div>
          <label className="form-label">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
        </div>
        <div>
          <label className="form-label">Senha</label>
          <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" />
        </div>
        {carregando ? (
          <Spinner />
        ) : (
          <>
            <Link to="/conta/cadastrar" type="button" className="btn btn-secondary opacity-50 form-control">
              Cadastrar
            </Link>
            <button
              type="button"
              className="btn btn-primary form-control"
              onClick={() => {
                setCarregando(true);
                authEntrar(email, senha, callback);
              }}
            >
              Entrar
            </button>
          </>
        )}
        {mensagemErro !== null && <span className="text-danger text-center">{mensagemErro}</span>}
      </form>
    </Pagina>
  );
}
export default Entrar;
