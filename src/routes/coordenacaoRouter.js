import { Router } from "express";
import { createCoordenacao, insertCoordenacao, selectCoordenacao, selectCoordenacoes, updateCoordenacao, deleteCoordenacao } from "../controllers/coordenacao.js";

const routerCoordenacao = Router();

routerCoordenacao.get("/", createCoordenacao);
routerCoordenacao.get("/one", selectCoordenacao);
routerCoordenacao.get("/all", selectCoordenacoes);
routerCoordenacao.post("/create", insertCoordenacao);
routerCoordenacao.put("/update", updateCoordenacao);
routerCoordenacao.delete("/delete", deleteCoordenacao);

export default routerCoordenacao;