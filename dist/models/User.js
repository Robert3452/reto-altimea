"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    names: { type: String, required: true },
    lastnames: { type: String, required: true },
    age: { type: Number, required: true },
    dni: { type: String, required: true },
    birth: { type: String, required: true },
    phoneNumber: { type: String, required: true },
}, {
    timestamps: true
});
exports.default = mongoose_1.model('users', userSchema);
