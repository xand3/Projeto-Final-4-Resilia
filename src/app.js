import express from "express";
<<<<<<< HEAD
import routerCoordenacao from "./routes/coordenacaoRouter.js";

const app = express();
app.use(express.json());

app.use("/", routerCoordenacao);
=======

import { rmSync } from "fs";

import routerAlunos from "./routes/alunoRoutes.js";
import routerTurma from "./routes/turmaRoutes.js";

import routerDocente from "./routes/docenteRoutes.js"

const app = express()
app.use(express.json())

app.use('/', routerDocente)

app.use('/',routerAlunos);
app.use('/',routerTurma);

app.use("/aluno", routerAlunos)
app.use("/turma",routerTurma)
>>>>>>> 9e04a267657873c5b1a16a9e90cb3a4a630daedf

app.listen(3000, () => {
  console.log("api rodando");
});

export default express;