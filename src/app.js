import express from "express";
import routes from "./routes/index.js";
import conectDB from "../config/database.js";
import errHandler from "./middlewares/errHandler.js";
import handler404 from "./middlewares/handler404.js";

const connectionDB = await conectDB();

connectionDB.on("error", (err) => {
  console.error("erro de conexão", err);
});

connectionDB.once("open", () => {
  console.log("Conexão feita com sucesso!");
});

const app = express();
routes(app);

app.use(handler404);

// eslint-disable-next-line no-unused-vars
app.use(errHandler);

app.listen(3000, () => {
  console.log("Servidor Iniciado");
});
