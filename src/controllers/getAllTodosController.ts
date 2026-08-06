//file based controller
// import { Todo } from "../model/_bk_todo.js";

// export function getAllTodosController(_req: any, res: any) {
//   Todo.fechAll((data) => {
//     const completedTodo =
//       data?.filter((todo: any) => todo.completed).length || 0;
//     const remainingTodo =
//       data?.filter((todo: any) => !todo.completed).length || 0;
//     res.render("index", {
//       pageTitle: "TODO LIST",
//       todos: data,
//       completedTodo,
//       remainingTodo,
//     });
//   });
// }
//----------------------------------------------------------------------------------------
import { Todo } from "../model/todo.js";
export async function getAllTodosController(_req: any, res: any) {
  const completedTodos = await Todo.count({
    where: {
      completed: true,
    },
  });

  const todos = await Todo.findAll();

  res.render("index", {
    pageTitle: "TODO LIST",
    todos,
    completedTodo: completedTodos,
    remainingTodo: todos.length - completedTodos,
  });
}
