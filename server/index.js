import Express from "express";
import cors from "cors";
import routes_auth from "./routes/routes_auth.js";
import routes_user from "./routes/routes_user.js";
import { criarTabelas } from "./db.js";

const app = Express();
app.use(Express.json());
app.use(cors());
criarTabelas();

app.use("/auth", routes_auth);
app.use("/user", routes_user);

app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000');
});