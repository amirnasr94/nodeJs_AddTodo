import { Todo } from "../model/todo.js";

export function addTodoController(req: any, res: any) {
  if (!req.body.task) res.redirect("/");
  const todo = new Todo(Math.floor(Math.random() * 1000), req.body.task);
  todo.save((err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
}
