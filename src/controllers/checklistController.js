import NotFound from "../error/NotFound.js";
import checklist from "../models/checklist.js";
import { task } from "../models/task.js";

class ChecklistController {
  static async getChecklists(req, res, next) {
    try {
      const checklistFind = checklist.find();
      req.result = checklistFind;
      next();
    } catch (err) {
      next(err);
    }
  }

  static async getOneChecklist(req, res, next) {
    try {
      const id = req.params.id;
      const checklistFind = await checklist.findById(id);

      if (checklistFind !== null) {
        res.status(200).json(checklistFind);
      } else {
        next(new NotFound("Falha ao listar o Id do checklist."));
      }
    } catch (err) {
      next(err);
    }
  }

  static async postChecklist(req, res, next) {
    const newChecklist = req.body;

    try {
      const taskFind = await task.findById(newChecklist.tasks);

      const checklistCompleto = {
        ...newChecklist,
        tasks: { ...taskFind._doc },
      };

      const checklistCriado = await checklist.create(checklistCompleto);

      res.status(201).json({
        message: "Criado com sucesso",
        checklist: checklistCriado,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateChecklist(req, res, next) {
    try {
      const id = req.params.id;
      await checklist.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteChecklist(req, res, next) {
    try {
      const id = req.params.id;
      await checklist.findByIdAndDelete(id);
      res.status(200).json({ message: "excluido com sucesso" });
    } catch (err) {
      next(err);
    }
  }
}

export default ChecklistController;
