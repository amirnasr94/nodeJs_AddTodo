//file based
// import { Todo } from "../model/_bk_todo.js";

// export const deleteTodoController = (req: any, res: any) => {
//   if (!req.query.id) res.redirect("/");
//   Todo.deleteTodo(req.query.id, (err) => {
//     if (err) console.log(err);
//     res.redirect("/");
//   });
// };
//-------------------------------------------------------------------------
import { Todo } from "../model/todo.js";

export const deleteTodoController = (req: any, res: any) => {
  if (!req.query.id) res.redirect("/");
  Todo.destroy({
    where: {
      id: req.query.id,
    },
  })
    .then(() => {
      res.redirect("/");
      console.log("Delete row was successfully");
    })
    .catch((err) => console.log(err));
};
