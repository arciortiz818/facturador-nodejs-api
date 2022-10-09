import { Schema, model } from "mongoose";
import { User } from "./user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
            enum: ["ADM","USR"]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

UserSchema.methods.toJSON = function(){
    const { _v, password, description, createdAt, updatedAt, ...user } = this.toObject()
    return user;
}

const UserModel = model('users',UserSchema)

export default UserModel