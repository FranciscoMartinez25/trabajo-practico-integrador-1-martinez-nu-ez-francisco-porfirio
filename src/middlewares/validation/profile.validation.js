import { body, param } from "express-validator";

export const createProfileValidation = [
  body("first_name").notEmpty().withMessage("El nombre no debe ser vacio")
  .isLength({ min: 2, max: 50 }).withMessage("El nombre debe tener entre 2 y 50 caracteres")
  .matches(/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/).withMessage("El nombre debe contener solo letras"),

  body("last_name").notEmpty().withMessage("El apellido no debe ser vacio")
  .isLength({ min: 2, max: 50 }).withMessage("El apellido debe tener entre 3 y 50 caracteres")
  .matches(/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/).withMessage("El apellido debe contener solo letras"),

  body("biography").notEmpty().withMessage("La biografia no debe ser vacia")
    .isLength({max: 500 })
    .withMessage("La biografia debe tener como maximo 500 caracteres"),

  body("avatar_url").optional().isURL().withMessage("El avatar debe ser una URL valida"),
  
  body("birth_date").notEmpty().isISO8601().withMessage("La fecha de nacimiento no debe ser vacia")
];