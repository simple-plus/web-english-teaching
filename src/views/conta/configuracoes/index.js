import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import Pagina from "../../../components/pagina";
import Spinner from "../../../components/spinner";
import AuthContext from "../../../contexts/auth";

function ConfiguracoesConta() {
  const { usuarioLogado, authAlterarApelido, authExcluirConta, usuarioEmail } = useContext(AuthContext);

  const [novoApelido, setNovoApelido] = useState("");
  const [carregandoNovoApelido, setCarregandoNovoApelido] = useState(false);
  const [mensagemAlterarApelido, setMensagemAlterarApelido] = useState(null);
  const [mensagemAlterarApelidoIsSuccess, setMensagemAlterarApelidoIsSuccess] = useState(null);

  const [senha, setSenha] = useState("");
  const [mensagemExcluirErro, setMensagemExcluirErro] = useState(null);

  const [carregandoExcluir, setCarregandoExcluir] = useState(false);

  function excluirErrorCallback(mensagem_erro) {
    setMensagemExcluirErro(mensagem_erro);
  }
  function alterarApelidoSucesso(mensagem) {
    setMensagemAlterarApelido(mensagem);
    setMensagemAlterarApelidoIsSuccess(true);
  }
  function alterarApelidoErro(mensagem) {
    setMensagemAlterarApelido(mensagem);
    setMensagemAlterarApelidoIsSuccess(false);
  }

  if (!usuarioLogado) {
    return <Redirect to="/" />;
  }

  return (
    <Pagina>
      <h1 className="text-center">Configurações da Conta</h1>
      <form className="d-grid gap-2 form-control-lg w-100" style={{ maxWidth: 420 }}>
        <div>
          <label className="form-label">Apelido</label>
          <input
            value={novoApelido}
            onChange={(e) => setNovoApelido(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div>
          {carregandoNovoApelido ? (
            <Spinner />
          ) : (
            <button
              onClick={() => {
                setCarregandoNovoApelido(false);
                mensagemAlterarApelidoIsSuccess(null);
                authAlterarApelido(novoApelido, alterarApelidoSucesso, alterarApelidoErro);
              }}
              type="button"
              className="btn btn-primary form-control"
            >
              Atualizar apelido
            </button>
          )}
          {mensagemAlterarApelidoIsSuccess !== null && (
            <span className={`text-${mensagemAlterarApelidoIsSuccess ? "success" : "danger"} text-center`}>
              {mensagemAlterarApelido}
            </span>
          )}
          {mensagemExcluirErro !== null && <span className="text-danger text-center">{mensagemExcluirErro}</span>}
        </div>
        <div>
          <label className="form-label">Email</label>
          <input value={usuarioEmail} type="email" className="form-control" disabled />
        </div>
        <div className="mt-5">
          <label className="form-label">Confirme sua senha para excluir a conta</label>
          <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" />
          {carregandoExcluir ? (
            <Spinner />
          ) : (
            <div
              role="button"
              onClick={() => {
                setCarregandoExcluir(true);
                authExcluirConta(senha, excluirErrorCallback);
              }}
            >
              <span className="text-danger">Excluir conta</span>
            </div>
          )}
        </div>
        {mensagemExcluirErro !== null && <span className="text-danger text-center">{mensagemExcluirErro}</span>}
      </form>
    </Pagina>
  );
}

export default ConfiguracoesConta;
