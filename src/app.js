import express from "express";
import { rmSync } from "fs";
import { createAluno, deleteAluno, insertAluno, selectAluno, selectAlunos, updateAluno } from "./controllers/aluno.js";

const app = express()
app.use(express.json())


app.listen(3000, () => {
    console.log("api rodando")
})