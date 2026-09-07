import { Router } from "express";
import {
  createTag,
  deleteTag,
  getTagById,
  updateTag,
} from "../controllers/tag.controller.js";
import { createUserValidation, updateUserValidation } from "../middlewares/validations/user.validation.js";
import { validate } from "../middlewares/validate.js";

export const tagRouter = Router();


tagRouter.post("/tags",createUserValidation, validate, createTag); 

tagRouter.get("/tags/:id", getTagById); 

tagRouter.put("/tags/:id", updateTag, validate, updateTag);

tagRouter.delete("/tags/:id", deleteTag);
