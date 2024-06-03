<<<<<<< Updated upstream
import db from '../../db.js';
import { User } from "./users.model.js";

class UsersController {

    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

}

=======
import db from '../../db.js';
import { User } from "./users.model.js";

class UsersController {

    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

}

>>>>>>> Stashed changes
export default new UsersController();