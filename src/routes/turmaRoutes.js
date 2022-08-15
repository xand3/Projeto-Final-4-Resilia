import {Router} from "express";
import { createTurma, deleteTurma, insertTurma, selectTurma, selectTurmas, updateTurma } from "../controllers/turma.js";


const routerTurma = Router();


routerTurma.get('/',createTurma)

routerTurma.get('/all',selectTurmas);
routerTurma.get('/one',selectTurma);
routerTurma.post('/create',insertTurma);
routerTurma.put('/update',updateTurma);
routerTurma.delete('/delete',deleteTurma);

export default routerTurma;
