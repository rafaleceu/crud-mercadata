"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
const router = express_1.Router();
router.get('/', UserController_1.default.showAllUser);
router.get('/:id([0-9]+)', UserController_1.default.showUser);
router.post('/', UserController_1.default.createUser);
router.delete('/:id([0-9]+)', UserController_1.default.deleteUser);
router.patch('/:id([0-9]+)', UserController_1.default.updateUser);
exports.default = router;
