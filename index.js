//Importando o Express
const Express = require("express");
//Inicializando o Express no porjeto Node.js
const Aplicativo = new Express();
//Disponibiliza o recurso (Endpoint) via Http
Aplicativo.get("/", (RequisicaoCliente, RespostaServidor)=>{
    RespostaServidor.send("Olá Mundo!!!")});

//Configuração da porta de acesso aos recursos do express via http
Aplicativo.listen(1234, () => console.log("Servidor Rodando!!"));

