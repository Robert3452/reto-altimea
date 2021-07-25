import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';
const { MONGO_URI } = config;

const dbOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}
mongoose.connect(MONGO_URI || "mongodb://localhost:27017/test", dbOptions);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connection stablished')
});

connection.on('error', (err) => {
    console.log(err);
    process.exit(0);
});