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
export function getAllTodosController(_req: any, res: any) {
  // let completedTodos: any, remainingTodos: any;
  // Todo.findAll({
  //   where: {
  //     completed: true,
  //   },
  // }).then((response) => (completedTodos = response));
  // Todo.findAll({
  //   where: {
  //     completed: false,
  //   },
  // }).then((response) => (remainingTodos = response));
  // console.log({ completedTodos, remainingTodos });

  Todo.findAll().then((response) => {
    res.render("index", {
      pageTitle: "TODO LIST",
      todos: response,
      completedTodo: 50,
      remainingTodo: 50,
    });
  });
}
