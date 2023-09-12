import mongoose from 'mongoose';
import { taskSchema } from './task.js';

const { Schema, model } = mongoose;

const checklistSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    tasks: taskSchema,
  },
  { versionKey: false }
);

const checklist = model('checklist', checklistSchema);

export default checklist;
