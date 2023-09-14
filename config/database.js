import {} from "dotenv/config.js";
import mongoose from "mongoose";

async function conectDB() {
  mongoose
    .connect(process.env.URL_CONNECT_MONGO_DATABASE)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

  return mongoose.connection;
}

export default conectDB;
