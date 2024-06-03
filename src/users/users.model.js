<<<<<<< Updated upstream
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const User = db.define("users", {
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
})
=======
import db from "../../db.js";
import { DataTypes, Sequelize } from "sequelize";

export const User = db.define("users", {
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
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
>>>>>>> Stashed changes
