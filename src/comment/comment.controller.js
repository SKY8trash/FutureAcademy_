<<<<<<< Updated upstream
import db from '../../db.js';
import { Comment } from "./comment.model.js";

class commentController {

  async createComment(req, res) {
    try {
        console.log(req.body)
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async getComment(req, res) {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async getCommentById(req, res) {
    try {
        const comments = await Comment.findByPk(req.params.id);
        if (comments) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async updateComment(req, res) {
    try {
        const [updated] = await Comment.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedComment = await Comment.findByPk(req.params.id);
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async deleteComment(req, res) {
    try {
        const deleted = await Comment.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

}

=======
import db from '../../db.js';
import { Comment } from "./comment.model.js";

class commentController {

  async createComment(req, res) {
    try {
        console.log(req.body)
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async getComment(req, res) {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async getCommentById(req, res) {
    try {
        const comments = await Comment.findByPk(req.params.id);
        if (comments) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async updateComment(req, res) {
    try {
        const [updated] = await Comment.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedComment = await Comment.findByPk(req.params.id);
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

async deleteComment(req, res) {
    try {
        const deleted = await Comment.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

}

>>>>>>> Stashed changes
export default new commentController();