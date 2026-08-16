import Todo_Model from "../db/model/todo.js";

export const deleteTodoController = async (req: any, res: any) => {
  if (!req.query.id) res.redirect("/");
  try {
    await Todo_Model.findByIdAndDelete({ _id: req.query.id });
    res.redirect("/");
    console.log("Delete row was successfully");
  } catch (error) {
    console.log(error);
  }
};
