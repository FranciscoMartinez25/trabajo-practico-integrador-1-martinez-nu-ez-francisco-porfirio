import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const UserModel = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference:{
        model:'user',
        key:'id'
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biography:{
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_date:{
        type: DataTypes.DATE,
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


