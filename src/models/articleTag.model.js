import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ArticleTagModel = sequelize.define(
  "ArticleTag",
  {
    // Model attributes are defined here
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference:{
        model:'article',
        key:'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference:{
        model:'tag',
        key:'id'
      }
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

    
  


