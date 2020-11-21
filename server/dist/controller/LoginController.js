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
class LoginController {
    constructor() {
        this.showUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let allowLogin = false;
            const userRepository = typeorm_1.getRepository(User_1.User);
            const user = yield userRepository.find({ where: { name: `${req.body.name}` } });
            if (req.body.password == user[0].password) {
                allowLogin = true;
            }
            else {
                allowLogin = false;
            }
            return res.send(allowLogin);
        });
    }
}
;
exports.default = new LoginController();
