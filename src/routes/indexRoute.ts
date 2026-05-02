import express from "express";
import { getAllTodosController } from "../controllers/getAllTodosController.js";

export const indexRoute = express.Router();

indexRoute.get("/", getAllTodosController);
