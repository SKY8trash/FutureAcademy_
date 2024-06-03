<<<<<<< Updated upstream
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const Comment = db.define("comment", {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    }
=======
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const Comment = db.define("comment", {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    }
>>>>>>> Stashed changes
})