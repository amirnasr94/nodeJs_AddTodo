import { adminRoute } from "./src/routes/adminRoute.js";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileAddress } from "./src/helper/fileAddress.js";

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
app.use("/admin", adminRoute);
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Todo List",
  });
});

//#region

app.listen(3000, () => {
  console.log("server is conected!");
});
