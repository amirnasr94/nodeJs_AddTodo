import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todo_db", "root", "Amir248625!@#", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});
