import { Todo } from "../model/todo.js";

export function getAllTodosController(_req: any, res: any) {
  Todo.fechAll((data) => {
    const completedTodo =
      data?.filter((todo: any) => todo.completed).length || 0;
    const remainingTodo =
      data?.filter((todo: any) => !todo.completed).length || 0;
    res.render("index", {
      pageTitle: "TODO LIST",
      todos: data,
      completedTodo,
      remainingTodo,
    });
  });
}
