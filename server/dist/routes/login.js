"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../controller/LoginController"));
const router = express_1.Router();
router.post('/', LoginController_1.default.showUser);
exports.default = router;
