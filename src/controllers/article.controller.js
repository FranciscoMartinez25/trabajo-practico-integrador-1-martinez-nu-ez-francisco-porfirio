import { matchedData } from "express-validator";
import { UserModel } from "../models/article.model.js";

export const createArticle = async (req, res) => {
  try {
    const validateData = matchedData(req) 

    const user = await ArticleModel.create(validateData);
    return res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const user = await ArticleModel.findAll({
        attributes: {
          exclude: ["article_id"],
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

      return res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const user = await ArticleModel.findOne({
        attributes: {
          exclude: ["article_id"],
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
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateArticle = async (req, res) => {
  try {

    const validateData = matchedData(req)

    const [updated] = await ArticleModel.update(validateData, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedArticle = await ArticleModel.findByPk(req.params.id);
      res.json(updatedArticle);
    } else {
      res.status(404).json({ message: "Artículo no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const deleted = await ArticleModel.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Artículo eliminado" });
    else res.status(404).json({ message: "Artículo no encontrado " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};