import db from '../../db.js';
import { Comment } from "./comment.model.js";

class commentController {

    async getComment(req, res) {
        try {
            const comment = await Comment.findAll();
            res.status(200).json(comment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

}

export default new commentController();