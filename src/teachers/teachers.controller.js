<<<<<<< Updated upstream
import db from '../../db.js';
import { Teachers } from "./teachers.model.js";

class teachersController {

  async createTeachers(req, res) {
    try {
      console.log(req.body)
      const teachers = await Teachers.create(req.body);
      res.status(201).json(teachers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  async getTeachers(req, res) {
    try {
      const teachers = await Teachers.findAll();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  async getTeachersById(req, res) {
    try {
      const teachers = await Teachers.findByPk(req.params.id);
      if (teachers) {
        res.status(200).json(teachers);
      } else {
        res.status(400).json({ error: `Teachers no found` });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  async updateTeachers(req, res) {
    try {
      const [updated] = await Teachers.update(req.body, {
        where: { id: req.params.id }
      });

      if (updated) {
        const updatedTeachers = await Teachers.findByPk(req,params.id);
        res.status(200).json(updateTeachers);
      } else {
        res.status(400).json({ error: `Teachers not found` });
      }
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  };

  async deleteTeachers(req, res) {
    try {
        const deleted = await Teachers.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Teachers not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
}

=======
import db from '../../db.js';
import { Teachers } from "./teachers.model.js";

class teachersController {

  async createTeachers(req, res) {
    try {
      console.log(req.body)
      const teachers = await Teachers.create(req.body);
      res.status(201).json(teachers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  async getTeachers(req, res) {
    try {
      const teachers = await Teachers.findAll();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  async getTeachersById(req, res) {
    try {
      const teachers = await Teachers.findByPk(req.params.id);
      if (teachers) {
        res.status(200).json(teachers);
      } else {
        res.status(400).json({ error: `Teachers no found` });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  async updateTeachers(req, res) {
    try {
      const [updated] = await Teachers.update(req.body, {
        where: { id: req.params.id }
      });

      if (updated) {
        const updatedTeachers = await Teachers.findByPk(req,params.id);
        res.status(200).json(updateTeachers);
      } else {
        res.status(400).json({ error: `Teachers not found` });
      }
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  };

  async deleteTeachers(req, res) {
    try {
        const deleted = await Teachers.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Teachers not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
}

>>>>>>> Stashed changes
export default new teachersController();