const express = require("express");
const router = express.Router();
const porta = 1234;

const app = express();

function horaCerta(request, response) {
  const data = new Date();
  const hora = data.toLocaleTimeString("pt-BR");

  response.send(hora);
}

function mostrePorta() {
  console.log("O servidor está rodando na porta ", porta);
}

app.use(router.get("/horariobrasilia", horaCerta));
app.listen(porta, mostrePorta);
