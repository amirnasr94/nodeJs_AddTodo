//file based
// import { Todo } from "../model/_bk_todo.js";

// export const completeTodoController = (req: any, res: any) => {
//   if (!req.query.id) res.redirect("/");
//   Todo.completedTodo(req.query.id, (err) => {
//     if (err) console.log(err);
//     res.redirect("/");
//   });
// };
//------------------------------------------------------------------------------
import { Todo } from "../model/todo.js";

export const completeTodoController = (req: any, res: any) => {
  if (!req.query.id) res.redirect("/");
  Todo.findOne({
    where: { id: req.query.id },
  })
    .then((data) => {
      if (!data) return;
      Todo.update(
        {
          completed: true,
        },
        {
          where: {
            id: req.query.id,
          },
        },
      )
        .then(() => {
          res.redirect("/");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
