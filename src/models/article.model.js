import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const UserModel = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status:{
        type: DataTypes.ENUM('published', 'archived'),
        defaultValue: 'published',
        allowNull: false
    },
    excerpt:{
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference:{
        model:'user',
        key:'id'
      }
    },
    
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    // timestamps: false,
    paranoid: true
  },
);


