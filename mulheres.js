const express = require("express");
const router = express.Router();
const porta = 7777;

const app = express();

const mulheres = [
  {
    nome: "Alice Pantoja",
    imagem: "C:Users\fernaPicturesIMG_20220713_181850861.jpg",
    minibio:
      "menina de 10 anos ja envolvida com tecnologia, estudante de robótica",
  },

  {
    nome: "Fernanda Pantoja",
    imagem:
      "https://media.licdn.com/dms/image/D4D03AQGfRqKsLA5u3Q/profile-displayphoto-shrink_800_800/0/1673287429272?e=1694649600&v=beta&t=CZueSlOEuc0yG8HXDZEiVmMJsG9XjzuiOrqmO20AT9k",

    minibio: "Desenvolvedora, mãe.",
  },

  {
    nome: "Iana Chan",
    imagem:
      "https://media.licdn.com/dms/image/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_800_800/0/1686007267293?e=1694649600&v=beta&t=zwsQ7OhvoHKN6T7v3RNeUKiNiig85xBTWFhWIek47q8",
    minibio: "Fundadora da PrograMaria",
  },
];

function mostraMulheres(request, response) {
  response.json(mulheres);
}

function mostrePorta() {
  console.log("O servidor está rodando na porta ", porta);
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostrePorta);
