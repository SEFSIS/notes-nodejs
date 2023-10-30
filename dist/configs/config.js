"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.configs = {
    DB_URI: process.env.DB_URI ||
        "mongodb+srv://sofiia:soffiia1@notes-node.f3utndd.mongodb.net/",
    PORT: process.env.PORT || 5005,
    SECRET_SALT: process.env.SECRET_SALT,
};
