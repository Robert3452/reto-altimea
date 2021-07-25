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
exports.getUsers = exports.addUsers = void 0;
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const addUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = req.body;
        if (!Array.isArray(users)) {
            throw "Please add an array of objects with 'email', 'names', 'lastnames', 'phoneNumber', 'dni', 'birth' and 'age'";
        }
        const newUsers = yield UserRepository_1.default.bulkWriteUsers(users);
        return res.json({
            statusCode: 200,
            message: "Users created successfully",
            data: newUsers,
        });
    }
    catch (error) {
        return res.json({ message: error });
    }
});
exports.addUsers = addUsers;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserRepository_1.default.getAll();
        const response = users.map((el) => {
            const user = Object.assign(Object.assign({}, el), { names: `${el.names} ${el.lastnames}` });
            delete user.lastnames;
            return user;
        });
        return res.json({ statusCode: 200, message: "Users list", data: response });
    }
    catch (error) {
        return res.json({ message: error });
    }
});
exports.getUsers = getUsers;
