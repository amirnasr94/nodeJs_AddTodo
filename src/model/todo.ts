import fs from "fs";
import path from "path";
import { fileAddress } from "../helper/fileAddress.js";

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
    fs.writeFile(
      path.join(fileAddress(), "..", "data", "db.json"),
      JSON.stringify(this),
      (err) => {
        if (err) callBack(err);
        else callBack();
      },
    );
  }
}
