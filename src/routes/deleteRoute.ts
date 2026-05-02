import express from "express";
import { deleteTodoController } from "../controllers/deleteTodoController.js";

export const deleteRoute = express.Router();

deleteRoute.get("/delete-todo", deleteTodoController);
