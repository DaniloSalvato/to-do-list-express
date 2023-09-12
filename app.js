import express from 'express';
import routes from './src/routes/index.js';
import conectDB from './config/database.js';

const connectionDB = await conectDB();

connectionDB.on('error', (err) => {
  console.error('erro de conexão', err);
});

connectionDB.once('open', () => {
  console.log('Conexão feita com sucesso!');
});

const app = express();
routes(app);

app.listen(3000, () => {
  console.log('Servidor Iniciado');
});
