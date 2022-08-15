import { Router } from "express";
import { createAluno, deleteAluno, insertAluno, selectAluno, selectAlunos, updateAluno } from "../controllers/aluno.js";


const routerAlunos = Router();


routerAlunos.get('/',createAluno)

routerAlunos.get('/all',selectAlunos);
routerAlunos.get('/one',selectAluno);
routerAlunos.post('/create',insertAluno);
routerAlunos.put('/update',updateAluno);
routerAlunos.delete('/delete',deleteAluno);

export default routerAlunos
