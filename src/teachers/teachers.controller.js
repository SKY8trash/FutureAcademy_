import db from '../../db.js';
import { Teachers } from "./teachers.model.js";

class teachersController {

  async getTeachers(req, res) {
    try {
      const teachers = await Teachers.findAll();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

}

export default new teachersController();