import express from 'express';
import checklistController from '../controllers/checklistController.js';

const routes = express.Router();

routes.get('/checklists', checklistController.getChecklists);

routes.get('/checklist/:id', checklistController.getOneChecklist);

routes.post('/checklist', checklistController.postChecklist);

routes.put('/checklist/:id', checklistController.updateChecklist);

routes.delete('/checklist/:id', checklistController.deleteChecklist);

export default routes;
