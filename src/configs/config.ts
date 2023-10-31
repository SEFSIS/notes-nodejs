import { config } from "dotenv";

config();

export const configs = {
  DB_URI:
    process.env.DB_URI ||
    "mongodb+srv://sofiia:soffiia1@notes-node.f3utndd.mongodb.net/",
  PORT: process.env.PORT || 5005,
  SECRET_SALT: process.env.SECRET_SALT,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
};
