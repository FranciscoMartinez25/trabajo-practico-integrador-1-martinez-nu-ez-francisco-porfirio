import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { TagModel } from "./tag.model.js";
import { ArticleModel } from "./article.model.js";

export const ArticleTagModel = sequelize.define(
  "ArticleTag",
  {
    // Model attributes are defined here
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'article',
        key:'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
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
ArticleModel.belongsToMany(TagModel, { through: ArticleTagModel, as: "tags", 
  foreignKey: "article_id", otherKey: "tag_id" });
TagModel.belongsToMany(ArticleModel, { through: ArticleTagModel, as: "articles", 
  foreignKey: "tag_id", otherKey: "article_id" });
