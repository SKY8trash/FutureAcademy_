<<<<<<< Updated upstream
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const Auth = db.define("auth", {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
=======
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const Auth = db.define("auth", {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
>>>>>>> Stashed changes
})