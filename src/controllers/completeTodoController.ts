import { Todo } from "../model/todo.js";

export const completeTodoController = (req: any, res: any) => {
  if (!req.query.id) res.redirect("/");
  Todo.completedTodo(req.query.id, (err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
};
