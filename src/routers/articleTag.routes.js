import { Router } from "express";
import {
  getArticleTags,
  assignTagToArticle,
  removeTagFromArticle,
} from "../controllers/articleTag.controller.js";
import { validate } from "../middlewares/validate.js";

export const articleTagRouter = Router();

articleTagRouter.get("/articles/:id/tags", getArticleTags);
articleTagRouter.post("/articles/:id/tags", assignTagToArticle);
articleTagRouter.delete("/articles/:id/tags/:tagId", removeTagFromArticle);
