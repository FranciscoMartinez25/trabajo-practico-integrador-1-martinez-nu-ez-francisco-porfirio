import { body, param } from "express-validator";
import { TagModel } from "../../models/tag.model.js";

export const createTagValidation = [
  body("name").notEmpty().withMessage("El titulo no debe ser vacio")
  .isLength({ min: 2, max: 30 }).withMessage("El titulo debe tener entre 2 y 30 caracteres")
  .custom((value)=>{
    if (/\s/.test(value)) {
        throw new Error("El nombre de la etiqueta no puede contener espacios");
      }
      return true;
    })
    .custom(async (value) => {
      const existingTag = await TagModel.findOne({ where: { name: value } });
      if (existingTag) {
        throw new Error("Ya existe una etiqueta con este nombre");
      }
    }),
    
];


export const updateTagValidation = [
    body("name").notEmpty().withMessage("El titulo no debe ser vacio")
  .isLength({ min: 2, max: 30 }).withMessage("El titulo debe tener entre 2 y 30 caracteres")
  .custom((value)=>{
    if (/\s/.test(value)) {
        throw new Error("El nombre de la etiqueta no puede contener espacios");
      }
      return true;
    })
    .custom(async (value) => {
      const existingTag = await TagModel.findOne({ where: { name: value } });
      if (existingTag) {
        throw new Error("Ya existe una etiqueta con este nombre");
      }
    }), 
  body("tag_id").optional().custom(async (value) => {
    const tag = await TagModel.findByPk(value);
    if (!tag) {
      return Promise.reject("El tag_id no existe");
    }
  }),

];