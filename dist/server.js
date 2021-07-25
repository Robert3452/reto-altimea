"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
require("./database/mongodb");
const config_1 = __importDefault(require("./config"));
const { PORT } = config_1.default;
const app = express_1.default();
app.set('port', PORT);
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
exports.default = app;
