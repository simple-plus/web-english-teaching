(this["webpackJsonpweb-english-teaching"]=this["webpackJsonpweb-english-teaching"]||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(16),r=c.n(n),l=c(5),o=c(3),i=c(0);var j=function(e){var t=e.titulo,c=e.descricao,s=e.endereco,a=e.logo;return Object(i.jsxs)("span",{className:"row p-3 mx-auto text-black text-decoration-none",style:{maxWidth:720},children:[Object(i.jsx)("div",{className:"col-sm-6 col-12 align-self-center",children:Object(i.jsxs)("div",{className:"col-12 mx-auto text-align-center",children:[Object(i.jsx)("h1",{className:"text-center",children:t}),Object(i.jsx)("p",{className:"text-center",style:{lineHeight:"normal"},children:c})]})}),Object(i.jsx)("div",{className:"col-sm-6 col-12 ",children:Object(i.jsx)("img",{width:"100%",height:"100%",src:a,alt:"Descri\xe7\xe3o do jogo"})}),Object(i.jsx)("div",{className:"row mx-auto p-2",children:Object(i.jsx)(l.b,{to:s,className:"btn btn-danger",children:"Jogar"})})]})};var d=function(){return Object(i.jsx)("footer",{className:"d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top",children:Object(i.jsx)("div",{className:"col-md-4 d-flex justify-content-center ",children:Object(i.jsx)("span",{className:"text-muted",children:"\xa9 2021 Simple Plus"})})})},b=c(2),x=Object(s.createContext)(),u=function(e){var t=e.children,c=Object(s.useState)(null),a=Object(b.a)(c,2),n=a[0],r=a[1],l=Object(s.useState)(null),o=Object(b.a)(l,2),j=o[0],d=o[1];function u(){console.error("Fun\xe7\xe3o sem callback",arguments)}function m(){r(null),d(null)}return Object(i.jsx)(x.Provider,{value:{usuarioLogado:null!==n,usuarioApelido:j,authEntrar:function(e,t){r(e),d("APELIDO FAKE"),console.log("Logando ",e,t)},authSair:m,authCadastrar:function(e,t,c,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u;c===s?(d(e),r(t),console.log("Cadastrando ",e,t,c)):a("Senhas n\xe3o coincidem!")},authAlterarApelido:function(e){d(e),console.log("Alterando apelido",e)},authExcluirConta:function(e){m(),console.log("Excluindo conta",e)}},children:t})},m=x;var O=function(){var e=Object(s.useContext)(m),t=e.usuarioLogado,c=e.usuarioApelido,a=e.authSair;return Object(i.jsxs)("header",{className:"d-flex flex-wrap align-items-center justify-content-around py-3 mb-4 border-bottom",children:[Object(i.jsx)(l.b,{to:"/",className:"d-flex align-items-center justify-content-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none",children:Object(i.jsx)("i",{className:"bi bi-book-fill fs-2"})}),Object(i.jsxs)("ul",{className:"nav col-12 col-md-auto mb-2 justify-content-center align-items-center text-center mb-md-0",children:[Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",className:"nav-link px-3 link-dark",children:"In\xedcio"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/aprender",className:"nav-link px-3 link-dark",children:"Aprender"})}),Object(i.jsxs)("li",{className:"nav-item dropdown",children:[Object(i.jsx)("span",{className:"nav-link link-dark dropdown-toggle",role:"button","data-bs-toggle":"dropdown",children:"Contribuir"}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/colaborar/adicionar",className:"dropdown-item",children:"Adicionar Palavra"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/colaborar/confirmar",className:"dropdown-item",children:"Confirmar Palavra"})})]})]}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/estatistica",className:"nav-link px-3 link-dark",children:"Estat\xedsticas"})})]}),t?Object(i.jsxs)("div",{className:"d-flex align-items-center justify-content-center col-md-3 text-center",children:[Object(i.jsx)("span",{className:"me-3 text-primary",children:c}),Object(i.jsx)(l.b,{to:"/conta/configuracoes",children:Object(i.jsx)("i",{className:"bi bi-gear-fill text-dark fs-3"})}),Object(i.jsx)("div",{role:"button",className:"ms-3",onClick:a,children:Object(i.jsx)("i",{className:"bi bi-box-arrow-right fs-3"})})]}):Object(i.jsxs)("div",{className:"col-md-3 text-center",children:[Object(i.jsx)(l.b,{to:"/conta/entrar",type:"button",className:"btn btn-outline-primary me-2",children:"Entrar"}),Object(i.jsx)(l.b,{to:"/conta/cadastrar",type:"button",className:"btn btn-primary",children:"Cadastrar"})]})]})};var h=function(e){var t=e.children;return Object(i.jsxs)("div",{className:"d-flex flex-column flex-fill",children:[Object(i.jsx)(O,{}),Object(i.jsx)("div",{className:"container d-flex flex-column flex-fill align-items-center justify-content-center",children:t}),Object(i.jsx)(d,{})]})},p=c.p+"static/media/ExemploEscolherPalavra.23c6e6de.png",f=c.p+"static/media/ExemploEscreverPalavra.4d3987a2.png";var v=function(){return Object(i.jsxs)(h,{children:[Object(i.jsx)(j,{titulo:"Escolher Palavra",descricao:"Este jogo quer saber se voc\xea \xe9 capaz de lembrar qual a palavra \xe9 a certa pela sua ESCOLHA! Venha jogar! Entre na\r sua conta para manter seu hist\xf3rico de acertos e competir com os outros jogadores!",endereco:"/jogos/escolher",logo:p},"ep"),Object(i.jsx)(j,{titulo:"Escrever Tradu\xe7\xe3o",descricao:"Neste jogo voc\xea vai provar sua real mem\xf3ria! Voc\xea ter\xe1 que ESCREVER as tradu\xe7\xf5es de forma impec\xe1vel! Ser\xe1\r que voc\xea \xe9 capaz? Venha testar! Entre na sua conta para manter o hist\xf3rico de acertos e competir com os\r outros jogadores! Quem ser\xe1 o melhor?",endereco:"/jogos/escrever",logo:f},"et")]})};var g=function(){return Object(i.jsx)("div",{className:"text-center p-3",children:Object(i.jsx)("div",{className:"spinner-border",role:"status",children:Object(i.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})};var N=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(b.a)(n,2),j=r[0],d=r[1],x=Object(s.useState)(""),u=Object(b.a)(x,2),O=u[0],p=u[1],f=Object(s.useState)(""),v=Object(b.a)(f,2),N=v[0],y=v[1],C=Object(s.useState)(!1),w=Object(b.a)(C,2),E=w[0],S=w[1],k=Object(s.useState)(null),A=Object(b.a)(k,2),P=A[0],L=A[1],W=Object(s.useContext)(m),V=W.authCadastrar;function q(e){L(e),S(!1)}return W.usuarioLogado?Object(i.jsx)(o.a,{to:"/"}):Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center mb-2",children:"Cadastrar"}),Object(i.jsxs)("form",{className:"d-grid gap-2 form-control-lg w-100",style:{maxWidth:420},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Apelido"}),Object(i.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)},type:"text",className:"form-control"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Email"}),Object(i.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)},type:"email",className:"form-control"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Senha"}),Object(i.jsx)("input",{value:O,onChange:function(e){return p(e.target.value)},type:"password",className:"form-control"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Confirmar senha"}),Object(i.jsx)("input",{value:N,onChange:function(e){return y(e.target.value)},type:"password",className:"form-control"})]}),E?Object(i.jsx)(g,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.b,{to:"/conta/entrar",type:"button",className:"btn btn-secondary opacity-50 form-control",children:"Entrar"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){S(!0),V(c,j,O,N,q)},children:"Cadastrar"})]}),null!==P&&Object(i.jsx)("span",{className:"text-danger text-center",children:P})]})]})};var y=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(b.a)(n,2),j=r[0],d=r[1],x=Object(s.useState)(!1),u=Object(b.a)(x,2),O=u[0],p=u[1],f=Object(s.useState)(null),v=Object(b.a)(f,2),N=v[0],y=v[1],C=Object(s.useContext)(m),w=C.authEntrar;function E(e){y(e),p(!1)}return C.usuarioLogado?Object(i.jsx)(o.a,{to:"/"}):Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center mb-2",children:"Entrar"}),Object(i.jsxs)("form",{className:"d-grid gap-2 form-control-lg w-100",style:{maxWidth:420},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Email"}),Object(i.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)},type:"email",className:"form-control"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Senha"}),Object(i.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)},type:"password",className:"form-control"})]}),O?Object(i.jsx)(g,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.b,{to:"/conta/cadastrar",type:"button",className:"btn btn-secondary opacity-50 form-control",children:"Cadastrar"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){p(!0),w(c,j,E)},children:"Entrar"})]}),null!==N&&Object(i.jsx)("span",{className:"text-danger text-center",children:N})]})]})},C=Object(s.createContext)(),w=function(e){var t=e.children;return Object(i.jsx)(C.Provider,{value:{},children:t})},E=c(14);var S=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=Object(E.useState)(""),a=Object(b.a)(c,2),n=a[0],r=a[1],l=Object(E.useState)(""),o=Object(b.a)(l,2),j=o[0],d=o[1],x=Object(s.useContext)(m).usuarioLogado;function u(){console.log("Enviando palavra",n,j),r(""),d("")}function O(c,s){"Enter"===c&&(s?t.current.focus():(u(),e.current.focus()))}return Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center",children:"Adicionar palavra"}),!x&&Object(i.jsx)("span",{className:"text-center text-danger",children:"Para contribir entre na sua conta!"}),Object(i.jsxs)("form",{className:"form-control-lg w-100 d-grid gap-3",style:{maxWidth:420},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Palavra em Ingles"}),Object(i.jsx)("input",{ref:e,onKeyDown:function(e){return O(e.key,!0)},onChange:function(e){return r(e.target.value)},value:n,autoFocus:!0,className:"form-control",type:"text",disabled:!x})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Palavra em Portugu\xeas"}),Object(i.jsx)("input",{ref:t,onKeyDown:function(e){return O(e.key,!1)},onChange:function(e){return d(e.target.value)},value:j,className:"form-control",type:"text",disabled:!x})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Palavra em Portugu\xeas"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){return u()},children:"Enviar palavra"})]}),Object(i.jsxs)("div",{className:"text-secondary",children:[Object(i.jsx)("span",{children:"Observa\xe7\xf5es"}),Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:"A tradu\xe7\xe3o deve ser de forma literal."}),Object(i.jsx)("li",{children:"Ambas as palavras devem estar corretamente acentuadas"})]})]})]})]})};var k=function(e){var t=e.ingles,c=e.portugues;return Object(i.jsxs)("div",{className:"m-2",children:[Object(i.jsxs)("div",{className:"card",style:{minWidth:"14rem"},children:[Object(i.jsxs)("div",{className:"row mt-2 ps-4 pe-4",children:[Object(i.jsx)("div",{className:"col",children:"Ingl\xeas:"}),Object(i.jsx)("div",{className:"col text-primary",children:t})]}),Object(i.jsxs)("div",{className:"row mt-2 ps-4 pe-4",children:[Object(i.jsx)("div",{className:"col",children:"Portugu\xeas:"}),Object(i.jsx)("div",{className:"col text-primary",children:c})]}),Object(i.jsxs)("div",{className:"d-flex d-fill justify-content-around p-3",children:[Object(i.jsx)("div",{role:"button",children:Object(i.jsx)("i",{className:"bi bi-x-circle-fill text-danger fs-2"})}),Object(i.jsx)("div",{role:"button",children:Object(i.jsx)("i",{className:"bi bi-check-circle-fill text-success fs-2"})})]})]}),Object(i.jsx)("div",{})]})};var A=function(){var e=Object(s.useContext)(m).usuarioLogado;return Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center",children:"Confirmar palavras"}),!e&&Object(i.jsx)("span",{className:"text-center text-danger",children:"Para contribir entre na sua conta!"}),Object(i.jsxs)("div",{className:"text-secondary mx-auto p-5",style:{width:"fit-content"},children:[Object(i.jsx)("span",{children:"Observa\xe7\xf5es"}),Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:"Verificar se a tradu\xe7\xe3o est\xe1 correta."}),Object(i.jsx)("li",{children:"Verificar se a palavra em qualquer idioma est\xe1 com a ortografica correta"}),Object(i.jsx)("li",{children:"Verificar se o idioma est\xe1 correspondente \xe0 palavra."})]})]}),Object(i.jsxs)("div",{className:"d-flex flex-wrap justify-content-center m-4 p-1",children:[Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"}),Object(i.jsx)(k,{ingles:"test",portugues:"teste"})]})]})};var P=function(){var e=Object(s.useContext)(m),t=e.usuarioLogado,c=e.authAlterarApelido,a=e.authExcluirConta,n=e.usuarioEmail,r=Object(s.useState)(""),l=Object(b.a)(r,2),j=l[0],d=l[1],x=Object(s.useState)(!1),u=Object(b.a)(x,2),O=u[0],p=u[1],f=Object(s.useState)(null),v=Object(b.a)(f,2),N=v[0],y=v[1],C=Object(s.useState)(null),w=Object(b.a)(C,2),E=w[0],S=w[1],k=Object(s.useState)(""),A=Object(b.a)(k,2),P=A[0],L=A[1],W=Object(s.useState)(null),V=Object(b.a)(W,2),q=V[0],D=V[1],F=Object(s.useState)(!1),I=Object(b.a)(F,2),z=I[0],R=I[1];function J(e){D(e)}function K(e){y(e),S(!0)}function M(e){y(e),S(!1)}return t?Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center",children:"Configura\xe7\xf5es da Conta"}),Object(i.jsxs)("form",{className:"d-grid gap-2 form-control-lg w-100",style:{maxWidth:420},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Apelido"}),Object(i.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)},type:"text",className:"form-control"})]}),Object(i.jsxs)("div",{children:[O?Object(i.jsx)(g,{}):Object(i.jsx)("button",{onClick:function(){p(!1),E(null),c(j,K,M)},type:"button",className:"btn btn-primary form-control",children:"Atualizar apelido"}),null!==E&&Object(i.jsx)("span",{className:"text-".concat(E?"success":"danger"," text-center"),children:N}),null!==q&&Object(i.jsx)("span",{className:"text-danger text-center",children:q})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Email"}),Object(i.jsx)("input",{value:n,type:"email",className:"form-control",disabled:!0})]}),Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("label",{className:"form-label",children:"Confirme sua senha para excluir a conta"}),Object(i.jsx)("input",{value:P,onChange:function(e){return L(e.target.value)},type:"password",className:"form-control"}),z?Object(i.jsx)(g,{}):Object(i.jsx)("div",{role:"button",onClick:function(){R(!0),a(P,J)},children:Object(i.jsx)("span",{className:"text-danger",children:"Excluir conta"})})]}),null!==q&&Object(i.jsx)("span",{className:"text-danger text-center",children:q})]})]}):Object(i.jsx)(o.a,{to:"/"})};var L=function(e){var t=e.ingles,c=e.portugues,a=e.mostrar,n=Object(s.useState)(!1),r=Object(b.a)(n,2),l=r[0],o=r[1];return Object(i.jsxs)("div",{role:"button",onClick:function(){return o(!0)},className:"f-flex flex-fill border m-3 p-2",children:[Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("h1",{className:"text-primary",children:t})}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("h1",{className:"text-success",style:{visibility:a||l?"visible":"hidden"},children:c})})]})};var W=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center mt-3",children:"Aprender"}),Object(i.jsxs)("div",{role:"button",className:"text-center mt-3",children:[Object(i.jsx)("input",{type:"checkbox",checked:c,onChange:function(){return a(!c)}})," Mostrar todas as tradu\xe7\xf5es"]}),Object(i.jsx)("div",{className:"text-center mt-3",children:Object(i.jsx)("button",{className:"btn btn-primary",children:"Atualizar Palavras"})}),Object(i.jsx)("div",{className:"d-flex flex-wrap justify-content-center border m-4 p-1",children:Object(i.jsx)(L,{ingles:"test",portugues:"teste",mostrar:c},"p-".concat(Math.random()))})]})};var V=function(){return Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center",children:"Escolha a tradu\xe7\xe3o correta!"}),Object(i.jsx)("div",{className:"mt-5",children:Object(i.jsx)("p",{className:"fs-1 text-center text-primary",id:"orig",children:"English Word"})}),Object(i.jsxs)("div",{className:"d-grid gap-2",style:{maxWidth:540},children:[Object(i.jsx)("button",{type:"button",className:"form-control btn btn-success",children:"opcao1"}),Object(i.jsx)("button",{type:"button",className:"form-control btn btn-success",children:"opcao1"}),Object(i.jsx)("button",{type:"button",className:"form-control btn btn-success",children:"opcao1"}),Object(i.jsx)("button",{type:"button",className:"form-control btn btn-success",children:"opcao1"})]}),Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("p",{className:"text-center text-secondary",children:"Acertos:"}),Object(i.jsx)("p",{className:"text-center text-secondary",children:"Quest\xe3o:"})]})]})};var q=function(){return Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"text-center",children:"Escreva a tradu\xe7\xe3o!"}),Object(i.jsx)("div",{className:"mt-5",children:Object(i.jsx)("p",{className:"fs-1 text-center text-primary",id:"orig",children:"test"})}),Object(i.jsxs)("div",{className:"mx-auto",style:{maxWidth:540},children:[Object(i.jsx)("input",{type:"text",className:"form-control text-center",placeholder:"Tradu\xe7\xe3o"}),Object(i.jsx)("button",{type:"button",className:"btn btn-success form-control mt-3",children:"Enviar"})]}),Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("p",{className:"text-center text-secondary",children:"Acertos:"}),Object(i.jsx)("p",{className:"text-center text-secondary",children:"Quest\xe3o:"})]})]})};var D=function(){return Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{className:"mx-auto text-center",children:"Top 10"}),Object(i.jsx)("ol",{className:"list-group list-group-numbered mt-5 mx-auto w-75",style:{minWidth:"fit-content"},children:Object(i.jsxs)("li",{className:"list-group-item d-flex align-items-center",children:[Object(i.jsxs)("div",{className:"d-flex flex-fill ms-3",children:[Object(i.jsxs)("div",{className:"d-flex flex-fill flex-column",children:[Object(i.jsx)("div",{className:"d-flex fw-bold",children:"apelido"}),Object(i.jsx)("div",{className:"d-flex text-secondary",children:"x contribui\xe7\xf5es"})]}),Object(i.jsx)("div",{className:"d-sm-none d-flex mx-2 bg-secondary",style:{width:1}})]}),Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("div",{className:"fw-bold me-3",children:"20/90"}),Object(i.jsx)("div",{className:"fw-bold",children:"10%"})]})]})}),Object(i.jsx)("h5",{className:"text-center mt-5",children:"Eu"}),Object(i.jsx)("ul",{className:"list-group mx-auto w-75",style:{minWidth:"fit-content"},children:Object(i.jsx)("li",{className:"list-group-item d-flex align-items-center",children:Object(i.jsxs)("div",{className:"d-flex flex-fill ms-3",children:[Object(i.jsxs)("div",{className:"d-flex flex-fill flex-column",children:[Object(i.jsx)("div",{className:"d-flex fw-bold",children:"apelido"}),Object(i.jsx)("div",{className:"d-flex text-secondary",children:"10 contribui\xe7\xf5es"})]}),Object(i.jsx)("div",{className:"d-sm-none d-flex mx-2 bg-secondary",style:{width:1}})]})})})]})};var F=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(w,{children:Object(i.jsxs)(l.a,{basename:"/web-english-teaching",children:[Object(i.jsx)(o.b,{exact:!0,path:"/",component:v}),Object(i.jsx)(o.b,{exact:!0,path:"/conta/cadastrar",component:N}),Object(i.jsx)(o.b,{exact:!0,path:"/conta/entrar",component:y}),Object(i.jsx)(o.b,{exact:!0,path:"/conta/configuracoes",component:P}),Object(i.jsx)(o.b,{exact:!0,path:"/aprender",component:W}),Object(i.jsx)(o.b,{exact:!0,path:"/colaborar/adicionar",component:S}),Object(i.jsx)(o.b,{exact:!0,path:"/colaborar/confirmar",component:A}),Object(i.jsx)(o.b,{exact:!0,path:"/jogos/escolher",component:V}),Object(i.jsx)(o.b,{exact:!0,path:"/jogos/escrever",component:q}),Object(i.jsx)(o.b,{exact:!0,path:"/estatistica",component:D})]})})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4faea54f.chunk.js.map