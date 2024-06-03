<<<<<<< Updated upstream
import db from '../../db.js';
import { Auth } from "./auth.model.js";

class AuthController {

  async createAuth(req, res) {
    try {
      console.log(req.body)
      const auth = await Auth.create(req.body);
      res.status(200).json(auth);

      try {
        const { name, email, password } = req.body;
        const user = await User.findOne({
          where: {
            [Op.or]: [{ name: name }, { email: email }],
          },
        });
        if (!user) throw new Error("forbidden");
        const decrypt = await bcrypt.compare(password, user.password);
        if (!decrypt) throw new Error("forbidden");
        const accessToken = await jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          SECRET
        );
        return res.status(200).json({ user, accessToken });
      } catch (e) {
        console.error(e);
        return res.status(500).json(validateError(e));
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

=======
import db from '../../db.js';
import { Auth } from "./auth.model.js";

class AuthController {

  async createAuth(req, res) {
    try {
      console.log(req.body)
      const auth = await Auth.create(req.body);
      res.status(200).json(auth);

      try {
        const { name, email, password } = req.body;
        const user = await User.findOne({
          where: {
            [Op.or]: [{ name: name }, { email: email }],
          },
        });
        if (!user) throw new Error("forbidden");
        const decrypt = await bcrypt.compare(password, user.password);
        if (!decrypt) throw new Error("forbidden");
        const accessToken = await jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          SECRET
        );
        return res.status(200).json({ user, accessToken });
      } catch (e) {
        console.error(e);
        return res.status(500).json(validateError(e));
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

>>>>>>> Stashed changes
export default new AuthController();