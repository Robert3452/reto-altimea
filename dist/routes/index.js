"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_routes_1 = __importDefault(require("./test.routes"));
const express_1 = require("express");
const router = express_1.Router();
router.use('/test', test_routes_1.default);
exports.default = router;
