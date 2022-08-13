import express from "express";
import { createAluno } from "./controllers/aluno.js";

const app = express()
app.use(express.json())

createAluno()



app.listen(3000,()=>{
    console.log("api rodando")
})