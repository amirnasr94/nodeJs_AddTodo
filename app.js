import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileAddress } from "./src/helper/fileAddress.js";
import { indexRoute } from "./src/routes/indexRoute.js";
import { adminRoute } from "./src/routes/adminRoute.js";
import { deleteRoute } from "./src/routes/deleteRoute.js";
import { completedRoute } from "./src/routes/completedRoute.js";

const app = express();
const __dirname = fileAddress();

//#region Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../../", "public")));

//#endregion

//#region Ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
//#endregion

//#region Routes
app.use("/", indexRoute);
app.use("/admin", adminRoute);
app.use("/admin", deleteRoute);
app.use("/admin", completedRoute);

//#region

app.listen(3000, () => {
  console.log("server is conected!");
});
