import { matchedData } from "express-validator";
import { ProfileModel } from "../models/profile.model.js";

export const createProfile = async (req, res) => {
  try {
    const validateData = matchedData(req) 

    const user = await ProfileModel.create(validateData);
    return res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProfiles = async (req, res) => {
  try {
    const user = await ProfileModel.findAll({
        attributes: {
          exclude: ["profile_id"],
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

export const getProfileByUserId = async (req, res) => {
  try {
    const user = await ProfileModel.findOne({
        attributes: {
          exclude: ["profile_id"],
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

export const updateProfile = async (req, res) => {
  try {

    const validateData = matchedData(req)

    const [updated] = await ProfileModel.update(validateData, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedProfile = await ProfileModel.findByPk(req.params.id);
      res.json(updatedProfile);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Usuario eliminado" });
    else res.status(404).json({ message: "Usuario no encontrado " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};