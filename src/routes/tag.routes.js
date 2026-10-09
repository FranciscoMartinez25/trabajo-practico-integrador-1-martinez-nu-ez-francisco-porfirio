import { Router } from "express";
import {
  createTag,
  deleteTag,
  getTagById,
  updateTag,
} from "../controllers/tag.controller.js";
import { createTagValidation, updateTagValidation } from "../middlewares/validation/tag.validation.js";
import { validate } from "../middlewares/validate.js";

export const tagRouter = Router();


tagRouter.post("/tags",createTagValidation, validate, createTag); 

tagRouter.get("/tags/:id", getTagById); 

tagRouter.put("/tags/:id", updateTag, validate, updateTag);

tagRouter.delete("/tags/:id", deleteTag);