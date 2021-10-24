import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import { AuthProvider } from "./contexts/auth";
import Cadastrar from "./views/conta/cadastrar";
import Entrar from "./views/conta/entrar";
import { ContentProvider } from "./contexts/content";
import AdicionarPalavra from "./views/colaborar/adicionar";
import ConfirmarPalavra from "./views/colaborar/confirmar";
import ConfiguracoesConta from "./views/conta/configuracoes";
import Aprender from "./views/aprender";
import EscolherTraducao from "./views/jogos/escolherTraducao";
import EscreverTraducao from "./views/jogos/escreverTraducao";
import Estatistica from "./views/estatistica";

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/conta/cadastrar" component={Cadastrar} />
          <Route exact path="/conta/entrar" component={Entrar} />
          <Route exact path="/conta/configuracoes" component={ConfiguracoesConta} />
          <Route exact path="/aprender" component={Aprender} />
          <Route exact path="/colaborar/adicionar" component={AdicionarPalavra} />
          <Route exact path="/colaborar/confirmar" component={ConfirmarPalavra} />
          <Route exact path="/jogos/escolher" component={EscolherTraducao} />
          <Route exact path="/jogos/escrever" component={EscreverTraducao} />
          <Route exact path="/estatistica" component={Estatistica} />
        </BrowserRouter>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;
