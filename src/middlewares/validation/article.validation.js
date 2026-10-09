import { body, param } from "express-validator";
import { ArticleModel } from "../models/article.model.js";
import { TagModel } from "../models/tag.model.js";

export const createArticleValidation = [
  body("title").notEmpty().withMessage("El titulo no debe ser vacio")
  .isLength({ min: 3, max: 200 }).withMessage("El titulo debe tener entre 3 y 200 caracteres"),

  body("content").notEmpty().withMessage("El contenido no debe ser vacio")
  .isLength({ min: 50 }).withMessage("El contenido debe tener al menos 50 caracteres"),

  body("tags").optional().isArray({ min: 1 })
  .withMessage("Los tags deben ser un array con al menos un elemento"),

  body("excerpt").optional()
  .isLength({ max: 500 }).withMessage("El excerpt debe tener como maximo 500 caracteres"),

  body("status").optional()
  .isIn(["archived", "published"])
  .withMessage("El status debe ser archived o published"),  

  body("tags")
    .optional()
    .isArray({ min: 1 }).withMessage("Los tags deben ser un array con al menos un elemento")
    .custom(async (tags) => {
      for (const tagId of tags) {
        const tag = await TagModel.findByPk(tagId);
        if (!tag) {
          throw new Error(`El tag con id ${tagId} no existe`);
        }
      }
      return true;
    }),


];