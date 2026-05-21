import express from "express";
import { completeTodoController } from "../controllers/completeTodoController.js";

export const completedRoute = express.Router();

completedRoute.get("/completed-todo", completeTodoController);
