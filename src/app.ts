import express, { type Express } from "express";
import bodyParser from "body-parser";
import path from "path";
import { indexRoute } from "./routes/indexRoute.js";
import { adminRoute } from "./routes/adminRoute.js";
import { deleteRoute } from "./routes/deleteRoute.js";
import { completedRoute } from "./routes/completedRoute.js";
import mongoose from "mongoose";
import CookieParser from "cookie-parser";

mongoose
  .connect("mongodb://localhost:27017/todo_db", {
    bufferCommands: false,
  })
  .then(() => {
    console.log("conncected!");
  });

const app: Express = express();
//#region Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(CookieParser());

app.use(express.static(path.join(process.cwd(), "public")));

//#endregion

//#region Ejs
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));
//#endregion

app.use(
  "/",
  (req, res, next) => {
    if (!req.cookies.lang) {
      res.cookie("lang", "en", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
      });
    }
    next();
  },
  indexRoute,
);

//#region Routes
app.use("/admin", adminRoute);
app.use("/admin", deleteRoute);
app.use("/admin", completedRoute);

//#region

app.listen(3000, () => {
  console.log("Server is connected on http://localhost:3000");
});
