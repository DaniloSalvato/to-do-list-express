import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const checklistSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

const Checklist = model('todo-list', checklistSchema, 'Checklist');

export default Checklist;
