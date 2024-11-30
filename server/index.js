import Express from "express";
import cors from "cors";
import rotas_autenticacao from "./rotas/rotas_autenticacao.js";
import rotas_usuarios from "./rotas/rotas_usuarios.js";
import { criarTabelas } from "./db.js";

const app = Express();
app.use(Express.json());
app.use(cors());
//criarTabelas();

app.use("/autenticacao", rotas_autenticacao;
app.use("/usuario", rotas_usuarios)

app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000');
});