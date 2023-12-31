import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    descricao: { type: String, required: [true, "A descrição é obrigatória"] },
    done: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const task = model("task", taskSchema);

export { task, taskSchema };
