import express from "express";
import { createAluno } from "./controllers/aluno.js";
const app = express()
app.use(express.json())

createAluno()

app.get("/aluno", (req, res) => {
    res.send("olá")
})

app.listen(3000,()=>{
    console.log("api rodando")
})