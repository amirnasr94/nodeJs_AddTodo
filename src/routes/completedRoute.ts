import express from "express";
import { addTodoController } from "../controllers/addTodoController.js";

export const completedRoute = express.Router();

completedRoute.post("/completed-todo", addTodoController);
