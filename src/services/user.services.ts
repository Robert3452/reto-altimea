import { Request, Response } from 'express';
import userCrud from '../repositories/UserRepository';

export const addUsers = async (req: Request, res: Response) => {
    try {
        let users = req.body;
        if (!Array.isArray(users)) {
            throw "Please add an array of objects with 'email', 'names', 'lastnames', 'phoneNumber', 'dni', 'birth' and 'age'";
        }
        const newUsers = await userCrud.bulkWriteUsers(users);
        return res.json({
            statusCode: 200,
            message: "Users created successfully",
            data: newUsers,
        })
    } catch (error) {
        return res.json({ message: error })
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {

        const users = await userCrud.getAll();

        const response = users.map((el: any) => {

            const user = { ...el, names: `${el.names} ${el.lastnames}` }
            delete user.lastnames;
            return user;
        });



        return res.json({ statusCode: 200, message: "Users list", data: response })
    } catch (error) {
        return res.json({ message: error })

    }
}