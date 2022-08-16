import express from "express";
import routerCoordenacao from "./routes/coordenacaoRouter.js";
import routerAlunos from "./routes/alunoRoutes.js";
import routerTurma from "./routes/turmaRoutes.js";
import routerDocente from "./routes/docenteRoutes.js"
import { rmSync } from "fs";



const app = express()
app.use(express.json())
app.use("/", routerCoordenacao);
app.use('/', routerDocente)
app.use('/',routerAlunos);
app.use('/',routerTurma);
app.use("/aluno", routerAlunos)
app.use("/turma",routerTurma)

app.listen(3000, () => {
  console.log("api rodando");
});

export default express;