<<<<<<< Updated upstream
import db from '../../db.js';
import { Register } from "./register.model.js";

class RegisterController {

  async createRegister(req, res) {
    try {
      console.log(req.body)
      const register = await Register.create(req.body);
      res.status(201).json(register);

      try {
        const { name, phone, email, password } = req.body;
        if (!password) throw new Error("Пароль не указан!");
        if (!/^(?=.*[A-ZА-ЯЁ])(?=.*\d).{6,}$/.test(password))
          throw new Error("Используйте строчные, заглавные буквы, цифры. Минимальная длина пароля 6 символов.");
        const encrypt = await bcrypt.hash(password, 12);
        const created = await User.create(
          {
            name,
            phone,
            password: encrypt,
            email,
          }
        );
        if (!created) throw new Error("err");
        return res.status(200).json(created);
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
import { Register } from "./register.model.js";

class RegisterController {

  async createRegister(req, res) {
    try {
      console.log(req.body)
      const register = await Register.create(req.body);
      res.status(201).json(register);

      try {
        const { name, phone, email, password } = req.body;
        if (!password) throw new Error("Пароль не указан!");
        if (!/^(?=.*[A-ZА-ЯЁ])(?=.*\d).{6,}$/.test(password))
          throw new Error("Используйте строчные, заглавные буквы, цифры. Минимальная длина пароля 6 символов.");
        const encrypt = await bcrypt.hash(password, 12);
        const created = await User.create(
          {
            name,
            phone,
            password: encrypt,
            email,
          }
        );
        if (!created) throw new Error("err");
        return res.status(200).json(created);
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
export default new RegisterController();