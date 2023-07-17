const express = require("express");
const router = express.Router();

const porta = 3333;

const app = express();

function mostreOla(request, response) {
  response.send("Ola, mundo!");
}

function mostrePorta() {
  console.log("O servidor está rodando na porta ", porta);
}

app.use(router.get("/ola", mostreOla));
app.listen(porta, mostrePorta);
