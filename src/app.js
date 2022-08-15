import express from "express";
import { rmSync } from "fs";
import {
  createAluno,
  deleteAluno,
  insertAluno,
  selectAluno,
  selectAlunos,
  updateAluno,
} from "./controllers/aluno.js";
import { createDocente, insertDocente } from "./controllers/docente.js";
import {
  createCoordenacao,
  insertCoordenacao,
  updateCoordenacao,
} from "./controllers/coordenacao.js";
import { createMatricula, insertMatricula } from "./controllers/matricula";
import { createTurma, insertTurma } from "./controllers/turma.js";

createDocente();
createCoordenacao();
createMatricula();
createTurma();

const app = express();
app.use(express.json());

app.post("/docente", (req, res) => {
  insertDocente(req.body);
  res.json({ status: 200 });
});

app.post("/coordenacao", (req, res) => {
  insertCoordenacao(req.body);
  res.json({ status: 200 });
});

app.put("/coordenacao", (req, res) => {
  if (req.body && !req.body.id) {
    res.json({
      statusCode: "400",
      msg: "Você precisa informar um id",
    });
  } else {
    updateCoordenacao(req.body);
    res.json({ status: 200 });
  }
});

app.post("/matricula", (req, res) => {
  insertMatricula(req.body);
  res.json({ status: 200 });
});

app.post("/turma", (req, res) => {
  insertTurma(req.body);
  res.json({ status: 200 });
});

app.listen(3000, () => {
  console.log("api rodando");
});
