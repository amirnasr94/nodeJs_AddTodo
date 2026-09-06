import { type Response } from "express";
import Todo_Model from "../db/model/todo.js";

export async function getAllTodosController(_req: any, res: Response) {
  const completedTodos = await Todo_Model.countDocuments({
    completed: true,
  });

  const todos = await Todo_Model.find();

  res.render("index", {
    pageTitle: "TODO LIST",
    todos,
    completedTodo: completedTodos,
    remainingTodo: todos.length - completedTodos,
  });
}
