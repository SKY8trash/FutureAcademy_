<<<<<<< Updated upstream
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const Teachers = db.define("teachers", {
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
})
=======
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const Teachers = db.define("teachers", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  learn: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
>>>>>>> Stashed changes
