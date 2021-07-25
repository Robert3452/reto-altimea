import IRepo from './';
import User, { IUser } from '../models/User';
import boom from '@hapi/boom';

class UserRepo implements IRepo<IUser>{
    async store(json: object): Promise<IUser> {
        try {
            let newUser = new User(json);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw boom.badRequest(error);
        }
    }
    async update(json: object, id: string): Promise<IUser | null> {
        try {
            const updated = await User.findOneAndUpdate({ _id: id }, { $set: json }, { new: true })
            return updated;
        } catch (error) {
            throw boom.badRequest(error);
        }
    }
    async delete(id: string): Promise<Object | IUser | null> {
        try {
            const userDeleted = User.findOneAndDelete({ _id: id });
            return userDeleted;
        } catch (error) {
            throw boom.badRequest(error)
        }
    }
    async getAll(): Promise<IUser[] | any> {
        try {
            const users = await User.find().lean();
            return users;
        } catch (error) {
            throw boom.badRequest(error)
        }
    }
    async findOneById(id: string): Promise<IUser | null> {
        try {
            const user = await User.findOne({ _id: id });
            if (!user)
                throw 'no user'
            return user;
        } catch (error) {
            throw boom.badRequest(error)
        }
    }

    async bulkWriteUsers(users: any[]): Promise<any> {
        try {
            return await User.bulkWrite(users.map(el => ({ insertOne: { document: el } })));
        } catch (error) {
            throw boom.badRequest(error)
        }
    }

}

export default new UserRepo();