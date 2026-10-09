import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleById,
  updateArticle,
} from "../controllers/user.controller.js";
import { createUserValidation, updateUserValidation } from "../middlewares/validations/user.validation.js";
import { validate } from "../middlewares/validate.js";

export const articleRouter = Router();

articleRouter.get("/articles", getArticle);

articleRouter.post("/articles", createArticleValidation, validate, createArticle);

articleRouter.get("/articles/:id", getArticleById);

articleRouter.put("/articles/:id", updateArticle, validate, updateArticle);

articleRouter.delete("/articles/:id", deleteArticle);
