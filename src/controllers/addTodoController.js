import { Todo } from "../model/todo.js";
export function addTodoController(req, res, next) {
    if (!req.body.task)
        res.redirect("/");
    const todo = new Todo(Math.floor(Math.random() * 1000), req.body.task);
    todo.save((err) => {
        if (err)
            console.log(err);
        res.redirect("/");
    });
}
//# sourceMappingURL=addTodoController.js.map