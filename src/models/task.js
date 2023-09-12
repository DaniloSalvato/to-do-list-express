import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const taskSchema = Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true,
  },
});

const Task = model('todo-list', taskSchema, 'Task');

export default Task;
