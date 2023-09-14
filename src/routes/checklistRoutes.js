import express from "express";
import checklistController from "../controllers/checklistController.js";
import pagnation from "../middlewares/pagnation.js";

const routes = express.Router();

routes.get("/checklists", checklistController.getChecklists, pagnation);

routes.get("/checklist/:id", checklistController.getOneChecklist);

routes.post("/checklist", checklistController.postChecklist);

routes.put("/checklist/:id", checklistController.updateChecklist);

routes.delete("/checklist/:id", checklistController.deleteChecklist);

export default routes;
