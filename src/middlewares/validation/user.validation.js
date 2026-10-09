import { body, param } from "express-validator";
import { UserModel } from "../../models/user.model.js";

export const createUserValidation = [
  body("username").notEmpty().withMessage("El username no debe ser vacio")
  .isLength({ min: 3, max: 20 })
  .withMessage("El username debe tener entre 3 y 20 caracteres")
  .isAlphanumeric().withMessage("El username debe ser alfanumerico")
  .custom(async(value)=>{
    const existingUser = await UserModel.findOne({ where: { username: value } });
    if (existingUser) {
      throw new Error("Ya existe un usuario con este username");
    }
  }
),

  body("email")
    .notEmpty()
    .withMessage("El email no debe ser vacio")
    .isEmail()
    .withMessage("El email debe ser valido")
    .custom(async(value)=>{
    const existingUser = await UserModel.findOne({ where: { email: value } });
    if (existingUser) {
      throw new Error("Ya existe un usuario con este email");
    }
  }),

  body("password").notEmpty().withMessage("La password no debe ser vacia")
  .isLength({ min: 8 }).withMessage("La password debe tener al menos 8 caracteres")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  .withMessage("La password debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial"),
  body("role").optional().isIn(["admin", "user"]).withMessage("El role debe ser admin o user"),

  body("user_id").optional().custom(async (value) => {
    const user = await UserModel.findByPk(value);
    if (!user) {
      return Promise.reject("El user_id no existe");
    }
  }),

];

export const updateUserValidation = [
  body("username").notEmpty().withMessage("El username no debe ser vacio")
  .isLength({ min: 3, max: 20 })
  .withMessage("El username debe tener entre 3 y 20 caracteres")
  .isAlphanumeric().withMessage("El username debe ser alfanumerico")
  .custom(async(value)=>{
    const existingUser = await UserModel.findOne({ where: { username: value } });
    if (existingUser) {
      throw new Error("Ya existe un usuario con este username");
    }
  }
),

  body("email")
    .notEmpty()
    .withMessage("El email no debe ser vacio")
    .isEmail()
    .withMessage("El email debe ser valido")
    .custom(async(value)=>{
    const existingUser = await UserModel.findOne({ where: { email: value } });
    if (existingUser) {
      throw new Error("Ya existe un usuario con este email");
    }
  }),

  body("password").notEmpty().withMessage("La password no debe ser vacia")
  .isLength({ min: 8 }).withMessage("La password debe tener al menos 8 caracteres")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  .withMessage("La password debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial"),
  body("role").optional().isIn(["admin", "user"]).withMessage("El role debe ser admin o user"),

  body("user_id").optional().custom(async (value) => {
    const user = await UserModel.findByPk(value);
    if (!user) {
      return Promise.reject("El user_id no existe");
    }
  }),

];