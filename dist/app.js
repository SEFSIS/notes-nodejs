"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = __importStar(require("mongoose"));
const config_1 = require("./configs/config");
const fs_service_1 = __importDefault(require("./fs.service"));
const User_model_1 = require("./models/User.model");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/users", async (req, res) => {
    const users = await User_model_1.User.find();
    return res.json(users);
});
app.post("/users", async (req, res) => {
    try {
        const createdUser = await User_model_1.User.create({ ...req.body });
        res.status(201).json(createdUser);
    }
    catch (e) {
        return res.status(400).json(e.message);
    }
});
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const users = await fs_service_1.default.reader();
        const user = users.find((user) => user.id === Number(id));
        if (!user) {
            throw new Error("User not found");
        }
        res.json(user);
    }
    catch (e) {
        res.status(404).json(e.message);
    }
});
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const users = await fs_service_1.default.reader();
        const index = users.findIndex((user) => user.id === Number(id));
        if (index === -1) {
            throw new Error("User not found");
        }
        users.splice(index, 1);
        await fs_service_1.default.writer(users);
        res.sendStatus(204);
    }
    catch (e) {
        res.status(404).json(e.message);
    }
});
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        if (!name || name.length < 3) {
            throw new Error("Wrong name");
        }
        if (!email || !email.includes("@")) {
            throw new Error("Wrong email");
        }
        const users = await fs_service_1.default.reader();
        const user = users.find((user) => user.id === Number(id));
        if (!user) {
            throw new Error("User not found");
        }
        user.email = email;
        user.name = name;
        await fs_service_1.default.writer(users);
        res.status(201).json(user);
    }
    catch (e) {
        res.status(404).json(e.message);
    }
});
const PORT = 5005;
app.listen(PORT, async () => {
    await mongoose.connect(config_1.configs.DB_URI);
    console.log(`Server has successfully started on PORT ${PORT}`);
});
