import fs from "fs";
import path from "path";
import { fileAddress } from "../helper/fileAddress.js";

const filePath = path.join(fileAddress(), "..", "data", "db.json");

export class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(id: number, text: string, completed: boolean = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callBack: (err?: NodeJS.ErrnoException) => void) {
    fs.readFile(
      filePath,
      (err: NodeJS.ErrnoException | null, data: NonSharedBuffer) => {
        if (err) return [];
        const todos = JSON.parse(data.toString());
        todos.unshift(this);
        fs.writeFile(filePath, JSON.stringify(todos), (err) => {
          if (err) callBack(err);
          else callBack();
        });
      },
    );
  }

  static fechAll(callback: (data: any) => void) {
    fs.readFile(
      filePath,
      (err: NodeJS.ErrnoException | null, data: NonSharedBuffer) => {
        if (err) return [];
        const todos = JSON.parse(data.toString());
        callback(todos);
      },
    );
  }

  static deleteTodo(id: number, callBack: (err?: any) => void) {
    fs.readFile(
      filePath,
      (err: NodeJS.ErrnoException | null, data: NonSharedBuffer) => {
        if (err) return [];
        const filteredTodo = JSON.parse(data.toString()).filter(
          (data: any) => data.id !== Number(id),
        );
        fs.writeFile(filePath, JSON.stringify(filteredTodo), (err) => {
          if (err) callBack(err);
          else callBack();
        });
      },
    );
  }

  static completedTodo(id: number, callBack: (err?: any) => void) {}
}
