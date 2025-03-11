import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.db_host);

const sequelize = new Sequelize({
  host: process.env.db_host,
  username: process.env.db_user,
  port: process.env.db_port,
  password: process.env.db_password,
  database: process.env.db_database,
  dialect: process.env.db_dialect,
});

export default sequelize;
