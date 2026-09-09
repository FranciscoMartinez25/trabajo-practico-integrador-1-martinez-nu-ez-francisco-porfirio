import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const TagModel = sequelize.define(
  "Tag",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
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