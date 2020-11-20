"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const PORT = process.env.PORT || config_1.default.server.PORT;
app_1.default.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
