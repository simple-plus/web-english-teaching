import React from "react";
import JogoCard from "../../components/jogoCard";
import Pagina from "../../components/pagina";
import logoEscolher from "../../img/ExemploEscolherPalavra.png";
import logoEscrever from "../../img/ExemploEscreverPalavra.png";

function Dashboard() {
  return (
    <Pagina>
      <JogoCard
        key="ep"
        titulo="Escolher Palavra"
        descricao="Este jogo quer saber se você é capaz de lembrar qual a palavra é a certa pela sua ESCOLHA! Venha jogar! Entre na
          sua conta para manter seu histórico de acertos e competir com os outros jogadores!"
        endereco="/jogos/escolher"
        logo={logoEscolher}
      />
      <JogoCard
        key="et"
        titulo="Escrever Tradução"
        descricao="Neste jogo você vai provar sua real memória! Você terá que ESCREVER as traduções de forma impecável! Será
          que você é capaz? Venha testar! Entre na sua conta para manter o histórico de acertos e competir com os
          outros jogadores! Quem será o melhor?"
        endereco="/jogos/escrever"
        logo={logoEscrever}
      />
    </Pagina>
  );
}

export default Dashboard;
