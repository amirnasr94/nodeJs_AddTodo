import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { indexRoute } from "./routes/indexRoute.js";
import { adminRoute } from "./routes/adminRoute.js";
import { deleteRoute } from "./routes/deleteRoute.js";
import { completedRoute } from "./routes/completedRoute.js";
import { sequelize } from "./helper/dbSetting.js";

const app = express();
//#region Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(process.cwd(), "public")));

//#endregion

//#region Ejs
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));
//#endregion

//#region Routes
app.use("/", indexRoute);
app.use("/admin", adminRoute);
app.use("/admin", deleteRoute);
app.use("/admin", completedRoute);

//#region

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is connected on http://localhost:3000");
    });
  })
  .catch((err) => console.log(err));
