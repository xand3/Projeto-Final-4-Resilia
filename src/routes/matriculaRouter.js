import { Router } from "express";
import { createMatricula, insertMatricula, selectMatricula, selectMatriculas, updateMatricula, deleteMatricula } from "../controllers/matricula.js";

const routerMatricula = Router();

routerMatricula.get("/", createMatricula);

routerMatricula.get("/all", selectMatriculas);
routerMatricula.get("/one", selectMatricula);
routerMatricula.post("/create", insertMatricula);
routerMatricula.put("/update", updateMatricula);
routerMatricula.delete("/delete", deleteMatricula);

export default routerMatricula;
