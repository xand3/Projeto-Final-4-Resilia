import express from "express";
import routerCoordenacao from "./routes/coordenacaoRouter.js";

const app = express();
app.use(express.json());

app.use("/", routerCoordenacao);

app.listen(3000, () => {
  console.log("api rodando");
});

export default express;