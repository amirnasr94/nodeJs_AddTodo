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
import Todo_Model from "../db/model/todo.js";

export const completeTodoController = async (req: any, res: any) => {
  if (!req.query.id) res.redirect("/");
  try {
    await Todo_Model.updateOne(
      {
        _id: req.query.id,
      },
      {
        $set: { completed: true },
      },
    );

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
