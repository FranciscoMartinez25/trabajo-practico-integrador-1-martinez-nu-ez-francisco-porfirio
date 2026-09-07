import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const UserModel = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role:{
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
        allowNull: false
    }
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    // timestamps: false,
    paranoid: true
  },
);


UserModel.hasOne(DirectionModel, { foreignKey: "user_id", as:"direccion" });
DirectionModel.belongsTo(UserModel, { foreignKey: "user_id", as:"propietario" });