import { Router } from "express";
import {
  createProfile,
  getProfiles,
  getProfileByUserId,
  updateProfile,
} from "../controllers/profile.controller.js";
import { createUserValidation, updateUserValidation } from "../middlewares/validations/user.validation.js";
import { validate } from "../middlewares/validate.js";

export const profileRouter = Router();

profileRouter.get("/profiles", getProfiles);

profileRouter.post("/profiles", createProfileValidation, validate, createProfile);

profileRouter.get("/profiles/:id", getProfileByUserId);

profileRouter.put("/profiles/:id", updateProfile, validate, updateProfile);
