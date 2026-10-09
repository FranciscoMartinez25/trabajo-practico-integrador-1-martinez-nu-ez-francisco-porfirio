import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { createUserValidation } from "../middlewares/validation/user.validation.js";
 import { validate } from "../middlewares/validate.js";

export const userRouter = Router();

userRouter.get("/users", getAllUsers);

userRouter.post("/users",createUserValidation, validate, createUser); 

userRouter.get("/users/:id", getUserById);

userRouter.put("/users/:id", updateUser, validate, updateUser);

userRouter.delete("/users/:id", deleteUser);
