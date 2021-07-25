import { Schema, Document, model } from 'mongoose';
export interface IUser extends Document {
    email: string,
    name: string,
    lastname: string,
    role: number,
    password?: string,
}

const userSchema: Schema<IUser> = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: Number, required: true, default: 3 },
    password: { type: String, required: true },
}, {
    timestamps: true
});


export default model<IUser>('users', userSchema);