import { Router } from "express";

import {createDocente, insertDocente, selectDocente, selectDocentes, deleteDocente, updateDocente } from "../controllers/docente.js";

const routerDocente = Router();

routerDocente.get("/", createDocente);


routerDocente.get('/docentes', selectDocentes)
routerDocente.get("/docente", selectDocente)
routerDocente.post('/docente', insertDocente)
routerDocente.put("/docente", updateDocente)
routerDocente.delete("/docente", deleteDocente)

routerDocente.post("/cachorros", (req, res) => {
    res.json({"status": 200})
})



export default routerDocente;
