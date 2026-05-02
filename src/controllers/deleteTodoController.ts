import { Todo } from "../model/todo.js";

export const deleteTodoController = (req: any, res: any) => {
  if (!req.query.id) res.redirect("/");
  Todo.deleteTodo(req.query.id, (err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
};
