<<<<<<< Updated upstream
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
=======
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "." + process.env.NODE_ENV + ".env" });
console.log(process.env.NODE_ENV);
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // port: 3308,
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
  }
);

export default db;
>>>>>>> Stashed changes
