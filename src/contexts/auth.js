import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioEmail, setUsuarioEmail] = useState(null);
  const [usuarioApelido, setUsuarioApelido] = useState(null);

  function missingCallback() {
    console.error("Função sem callback", arguments);
  }

  function authCadastrar(apelido, email, senha, confirmar_senha, error = missingCallback) {
    if (senha !== confirmar_senha) {
      error("Senhas não coincidem!");
      return;
    }
    setUsuarioApelido(apelido);
    setUsuarioEmail(email);
    console.log("Cadastrando ", apelido, email, senha);
  }

  function authEntrar(email, senha, error = missingCallback) {
    setUsuarioEmail(email);
    setUsuarioApelido("APELIDO FAKE");
    console.log("Logando ", email, senha);
  }

  function authSair() {
    setUsuarioEmail(null);
    setUsuarioApelido(null);
  }

  function authAlterarApelido(novo_apelido, success = missingCallback, error = missingCallback) {
    setUsuarioApelido(novo_apelido);
    console.log("Alterando apelido", novo_apelido);
  }

  function authExcluirConta(senha, error = missingCallback) {
    authSair();
    console.log("Excluindo conta", senha);
  }
  return (
    <AuthContext.Provider
      value={{
        usuarioLogado: usuarioEmail !== null,
        usuarioApelido: usuarioApelido,
        authEntrar,
        authSair,
        authCadastrar,
        authAlterarApelido,
        authExcluirConta,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
