import express from 'express';
import ChecklistController from '../controllers/checklistController.js';

const routes = express.Router();

routes.get('/checklist', ChecklistController.getChecklists);

routes.get('/checklist/:id', ChecklistController.getOneChecklist);

routes.post('/checklist', ChecklistController.postChecklist);

routes.put('/checklist/:id', ChecklistController.updateChecklist);

routes.delete('/checklist/:id', ChecklistController.deleteChecklist);

export default routes;
