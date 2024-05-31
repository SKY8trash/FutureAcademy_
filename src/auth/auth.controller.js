import db from '../../db.js';
import { Auth } from "./auth.model.js";

class AuthController {

  async auth(req, res) {
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
  }

}

export default new AuthController();