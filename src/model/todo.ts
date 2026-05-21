import { DataTypes } from "sequelize";
import { sequelize } from "../helper/dbSetting.js";

export const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true, // default is true
  },
});
