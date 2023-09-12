import express from 'express';
import taskController from '../controllers/taskController.js';

const routes = express.Router();

routes.get('/task', taskController.getTasks);

routes.get('/task/:id', taskController.getOneTask);

routes.post('/task', taskController.postTask);

routes.put('/task/:id', taskController.updateTask);

routes.delete('/task/:id', taskController.deleteTask);

export default routes;
