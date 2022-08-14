import express from "express";
import { rmSync } from "fs";
import { createAluno, deleteAluno, insertAluno, selectAluno, selectAlunos, updateAluno } from "./controllers/aluno.js";
import { createDocente, insertDocente } from "./controllers/docente.js";

createDocente()

const app = express()
app.use(express.json())

app.post('/docente', (req, res) => {
    insertDocente(req.body)
    res.json({"status": 200})
})


app.listen(3000, () => {
    console.log("api rodando")
})