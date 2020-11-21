"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../model/User");
class UserController {
    constructor() {
        this.showAllUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userRepository = typeorm_1.getRepository(User_1.User);
            const users = yield userRepository.find({
                select: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt']
            });
            return res.send(users);
        });
        this.showUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userRepository = typeorm_1.getRepository(User_1.User);
            const user = yield userRepository.findByIds([req.params.id], {
                select: ['id', 'name', 'password', 'lastName', 'email', 'createdAt', 'updatedAt']
            });
            return res.send(user);
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userRepository = typeorm_1.getRepository(User_1.User);
            const users = yield userRepository.save(req.body);
            console.log(req.body);
            return res.send(users);
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const userRepository = typeorm_1.getRepository(User_1.User);
            const users = yield userRepository.delete(req.params.id);
            return res.send(users);
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userRepository = typeorm_1.getRepository(User_1.User);
            const users = yield userRepository.update(req.params.id, req.body);
            return res.send(users);
        });
    }
}
;
exports.default = new UserController();
