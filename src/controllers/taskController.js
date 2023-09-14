import NotFound from "../error/NotFound.js";
import { task } from "../models/task.js";

class TaskController {
  static async getTasks(req, res, next) {
    try {
      const tasks = await task.find({});
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }

  static async getOneTask(req, res, next) {
    try {
      const id = req.params.id;
      const taskFind = await task.findById(id);
      if (taskFind !== null) {
        res.status(200).json(taskFind);
      } else {
        next(new NotFound("Falha ao listar o Id da task."));
      }
    } catch (err) {
      next(err);
    }
  }

  static async postTask(req, res, next) {
    try {
      const newTask = await task.create(req.body);
      res.status(201).json({
        message: "Criado com sucesso",
        task: newTask,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateTask(req, res, next) {
    try {
      const id = req.params.id;
      await task.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteTask(req, res, next) {
    try {
      const id = req.params.id;
      await task.findByIdAndDelete(id);
      res.status(200).json({ message: "excluido com sucesso" });
    } catch (err) {
      next(err);
    }
  }
}

export default TaskController;
