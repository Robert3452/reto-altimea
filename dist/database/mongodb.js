"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const { MONGO_URI } = config_1.default;
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
};
mongoose_1.default.connect(MONGO_URI || "mongodb://localhost:27017/test", dbOptions);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Database connection stablished');
});
connection.on('error', (err) => {
    console.log(err);
    process.exit(0);
});
