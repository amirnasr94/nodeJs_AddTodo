//file based
// import { Todo } from "../model/_bk_todo.js";

// export function addTodoController(req: any, res: any) {
//   if (!req.body.task) res.redirect("/");
//   const todo = new Todo(Math.floor(Math.random() * 1000), req.body.task);
//   todo.save((err) => {
//     if (err) console.log(err);
//     res.redirect("/");
//   });
// }
//---------------------------------------------------------------------------------
import Todo_Model from "../db/model/todo.js";

export function addTodoController(req: any, res: any) {
  if (!req.body.task) res.redirect("/");
  Todo_Model.insertOne({
    text: req.body.task,
  })
    .then((response) => {
      res.redirect("/");
      console.log(response);
    })
    .catch((err) => console.log(err));
}
