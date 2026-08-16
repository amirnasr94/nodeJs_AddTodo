import { Document, model, Schema } from "mongoose";

export interface ITodos extends Document {
  text: string;
  completed: boolean;
}

const TodoSchema = new Schema<ITodos>(
  {
    text: {
      type: String,
      required: true,
      minLength: 5,
      trim: true,
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: "todos",
  },
);

const Todo_Model = model<ITodos>("Todo_Model", TodoSchema);

export default Todo_Model;
