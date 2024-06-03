<<<<<<< Updated upstream
import db from '../../db.js';
import { Application } from "./application.model.js";

class applicationController {

    async createApplication(req, res) {
        try {
            console.log(req.body)
            const application = await Application.create(req.body);
            res.status(201).json(application);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    async getApplication(req, res) {
        try {
            const applications = await Application.findAll();
            res.status(200).json(applications);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    async getApplicationById(req, res) {
        try {
            const applications = await Application.findByPk(req.params.id);
            if (applications) {
                res.status(200).json(applications);
            } else {
                res.status(404).json({ error: 'Application not found' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    async updateApplication(req, res) {
        try {
            const [updated] = await Application.update(req.body, {
                where: { id: req.params.id }
            });

            if (updated) {
                const updatedApplication = await Application.findByPk(req.params.id);
                res.status(200).json(updatedApplication);
            } else {
                res.status(404).json({ error: 'Application not found' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    async deleteApplication(req, res) {
        try {
            const deleted = await Application.destroy({
                where: { id: req.params.id }
            });

            if (deleted) {
                res.status(204).json();
            } else {
                res.status(404).json({ error: 'Application not found' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

}

export default new applicationController();
=======
import db from "../../db.js";
import { Application } from "./application.model.js";

class applicationController {
  async createApplication(req, res) {
    try {
      console.log(req.body);
      const application = await Application.create(req.body);
      res.status(201).json(application);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getApplication(req, res) {
    try {
      const applications = await Application.findAll();
      console.log(applications);
      res.status(200).json(applications);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getApplicationById(req, res) {
    try {
      const applications = await Application.findByPk(req.params.id);
      if (applications) {
        res.status(200).json(applications);
      } else {
        res.status(404).json({ error: "Application not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateApplication(req, res) {
    try {
      const [updated] = await Application.update(req.body, {
        where: { id: req.params.id },
      });

      if (updated) {
        const updatedApplication = await Application.findByPk(req.params.id);
        res.status(200).json(updatedApplication);
      } else {
        res.status(404).json({ error: "Application not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteApplication(req, res) {
    try {
      const deleted = await Application.destroy({
        where: { id: req.params.id },
      });

      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ error: "Application not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new applicationController();
>>>>>>> Stashed changes
