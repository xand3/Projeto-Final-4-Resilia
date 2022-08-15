import express from "express";

import { rmSync } from "fs";
import routerAlunos from "./routes/alunoRoutes.js";
import routerTurma from "./routes/turmaRoutes.js";

const app = express()
app.use(express.json())

app.use('/',routerAlunos);
app.use('/',routerTurma);

app.use("/aluno", routerAlunos)
app.use("/turma",routerTurma)

app.listen(3000, () => {
    console.log("api rodando")
})

export default express