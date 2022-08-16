import { Router } from "express";

import {createDocente, insertDocente, selectDocente, selectDocentes, deleteDocente } from "../controllers/docente.js";

const routerDocente = Router();

routerDocente.get("/", createDocente);

// rotas para docente

routerDocente.get('/docentes', selectDocentes)
routerDocente.get("/docente", selectDocente)
routerDocente.post('/docente', insertDocente)
routerDocente.put("/docente", insertDocente)
routerDocente.delete("/docente", deleteDocente)


export default routerDocente;
