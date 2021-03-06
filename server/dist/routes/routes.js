"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const login_1 = __importDefault(require("./login"));
const routes = express_1.Router();
routes.use('/login', login_1.default);
routes.use('/api', user_1.default);
exports.default = routes;
