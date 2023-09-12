import { task } from '../models/task.js';

class TaskController {
  static async getTasks(req, res) {
    try {
      const tasks = await task.find({});
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async getOneTask(req, res) {
    try {
      const id = req.params.id;
      const task = await task.findById(id);
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async postTask(req, res) {
    try {
      const newTask = await task.create(req.body);
      res.status(201).json({
        message: 'Criado com sucesso',
        task: newTask,
      });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async updateTask(req, res) {
    try {
      const id = req.params.id;
      await task.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async deleteTask(req, res) {
    try {
      const id = req.params.id;
      await task.findByIdAndDelete(id);
      res.status(200).json({ message: 'excluido com sucesso' });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }
}

export default TaskController;
