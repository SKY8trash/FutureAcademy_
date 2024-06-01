import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "." + process.env.NODE_ENV + ".env" });

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    define: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        timestamps: true,
        paranoid: true,
    },
    logging: false,
    dialectOptions: {
        decimalNumbers: true,
    },
});

export default db;