import { matchedData } from "express-validator";
import { TagModel } from "../models/tag.model.js";

export const createTag = async (req, res) => {
  try {
    const validateData = matchedData(req) 

    const tag = await TagModel.create(validateData);
    return res.status(201).json(tag);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllTags = async (req, res) => {
  try {
    const tag = await TagModel.findAll({
        attributes: {
          exclude: ["tag_id"],
        },
        //   attributes: ["title"],
        include: [
          {
            model: TaskModel,
            as: "tareas",
              // attributes: {
              //   exclude: ["title", "user_id"],
              // },
            // include: [
            //   {
            //     model: DirectionModel,
            //     as: "propietario",
            //   },
            // ],
          },
        ],
      });

      return res.json(tag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTagById = async (req, res) => {
  try {
    const tag = await TagModel.findOne({
        attributes: {
          exclude: ["tag_id"],
        },
        //   attributes: ["title"],
        include: [
          {
            model: TaskModel,
            as: "tareas",
            // attributes: {
            //   exclude: ["title", "user_id"],
            // },
            include: [
              {
                model: DirectionModel,
                as: "propietario",
              },
            ],
          },
        ],
      });
      return res.json(tag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTag = async (req, res) => {
  try {

    const validateData = matchedData(req)

    const [updated] = await Tag.update(validateData, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedTag = await Tag.findByPk(req.params.id);
      res.json(updatedTag);
    } else {
      res.status(404).json({ message: "Etiqueta no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTag = async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Etiqueta eliminada" });
    else res.status(404).json({ message: "Etiqueta no encontrada " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};