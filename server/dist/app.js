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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
const routes_1 = __importDefault(require("./routes/routes"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.routes();
        this.database();
    }
    middleware() {
        this.express.use(cors_1.default());
        this.express.use(express_1.default.static(__dirname));
        this.express.use(express_1.default.json());
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: true }));
        this.express.use(routes_1.default);
    }
    routes() {
        this.express.use(routes_1.default);
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.createConnection();
        });
    }
}
exports.default = new App().express;
