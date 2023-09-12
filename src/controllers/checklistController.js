import checklist from '../models/checklist.js';
import { task } from '../models/task.js';

class ChecklistController {
  static async getChecklists(req, res) {
    try {
      const checklists = await checklist.find({});
      res.status(200).json(checklists);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao listar o checklist.` });
    }
  }

  static async getOneChecklist(req, res) {
    try {
      const id = req.params.id;
      const checklist = await checklist.findById(id);
      res.status(200).json(checklist);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao listar o checklist.` });
    }
  }

  static async postChecklist(req, res) {
    const newChecklist = req.body;

    try {
      const taskFind = await task.findById(newChecklist.tasks);

      const checklistCompleto = {
        ...newChecklist,
        tasks: { ...taskFind._doc },
      };

      const checklistCriado = await checklist.create(checklistCompleto);

      res.status(201).json({
        message: 'Criado com sucesso',
        checklist: checklistCriado,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao cadastrar o checklist.` });
    }
  }

  static async updateChecklist(req, res) {
    try {
      const id = req.params.id;
      await checklist.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao listar o checklist.` });
    }
  }

  static async deleteChecklist(req, res) {
    try {
      const id = req.params.id;
      await checklist.findByIdAndDelete(id);
      res.status(200).json({ message: 'excluido com sucesso' });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao listar o checklist.` });
    }
  }
}

export default ChecklistController;
