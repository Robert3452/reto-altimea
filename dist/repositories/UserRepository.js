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
const User_1 = __importDefault(require("../models/User"));
const boom_1 = __importDefault(require("@hapi/boom"));
class UserRepo {
    store(json) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newUser = new User_1.default(json);
                yield newUser.save();
                return newUser;
            }
            catch (error) {
                throw boom_1.default.badRequest(error);
            }
        });
    }
    update(json, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updated = yield User_1.default.findOneAndUpdate({ _id: id }, { $set: json }, { new: true });
                return updated;
            }
            catch (error) {
                throw boom_1.default.badRequest(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDeleted = User_1.default.findOneAndDelete({ _id: id });
                return userDeleted;
            }
            catch (error) {
                throw boom_1.default.badRequest(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find();
                return users;
            }
            catch (error) {
                throw boom_1.default.badRequest(error);
            }
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ _id: id });
                if (!user)
                    throw 'no user';
                return user;
            }
            catch (error) {
                throw boom_1.default.badRequest(error);
            }
        });
    }
}
exports.default = new UserRepo();
