import checklist from '../models/checklist.js';

class ChecklistController {
  static async getChecklists(req, res) {
    try {
      const checklists = await Checklist.find({});
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
      const checklist = await Checklist.findById(id);
      res.status(200).json(checklist);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao listar o checklist.` });
    }
  }

  static async postChecklist(req, res) {
    try {
      const newChecklist = await checklist.create(req.body);
      res.status(201).json({
        message: 'Criado com sucesso',
        checklist: newChecklist,
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
      await Checklist.findByIdAndUpdate(id, req.body);
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
      await Checklist.findByIdAndDelete(id);
      res.status(200).json({ message: 'excluido com sucesso' });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha ao listar o checklist.` });
    }
  }
}

export default ChecklistController;
