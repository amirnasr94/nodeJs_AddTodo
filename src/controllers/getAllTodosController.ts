import { Todo } from "../model/todo.js";

export function getAllTodosController(_req: any, res: any) {
  Todo.fechAll((data) => {
    res.render("index", {
      pageTitle: "TODO LIST",
      todos: data,
    });
  });
}
