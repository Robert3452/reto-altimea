"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: Number, required: true, default: 3 },
    password: { type: String, required: true },
}, {
    timestamps: true
});
exports.default = mongoose_1.model('users', userSchema);
