import fs from "fs";
import path from "path";
import { fileAddress } from "../helper/fileAddress.js";
export class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
    save(callBack) {
        fs.writeFile(path.join(fileAddress(), "..", "data", "db.json"), JSON.stringify(this), (err) => {
            if (err)
                callBack(err);
            else
                callBack();
        });
    }
}
//# sourceMappingURL=todo.js.map