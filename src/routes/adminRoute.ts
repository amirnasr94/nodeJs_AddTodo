import express from "express";
import { addTodoController } from "../controllers/addTodoController.js";

export const adminRoute = express.Router();

adminRoute.post("/add-todo", addTodoController);
