"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const dbPath = node_path_1.default.join(process.cwd(), 'db.json');
const reader = async () => {
    const json = await promises_1.default.readFile(dbPath, { encoding: 'utf-8' });
    return JSON.parse(json);
};
const writer = async (users) => {
    await promises_1.default.writeFile(dbPath, JSON.stringify(users));
};
module.exports = {
    reader,
    writer,
};
