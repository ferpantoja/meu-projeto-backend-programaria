//CONFIGURAÇÃO INICIAL DE UM SERVIDOR*
const express = require("express");

const porta = 3333;

const app = express();

function mostrePorta() {
  console.log("O servidor está rodando na porta ", porta);
}

app.listen(porta, mostrePorta);
