import { Schema, Document, model } from 'mongoose';
export interface IUser extends Document {
    email: string,
    names: string,
    lastnames: string,
    phoneNumber: string,
    dni: string,
    birth: string,
    age: number,
}

const userSchema: Schema<IUser> = new Schema({
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


export default model<IUser>('users', userSchema);