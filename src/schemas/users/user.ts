import {Schema, model} from "mongoose";
import {IUser} from "../../interfaces";

const userSchema =
    new Schema<IUser>({
        username: {
            type: String,
            required: true
        },
        password:  {
            type: String,
            required: true
        },
        firstName: String,
        lastName: String,
        createdAt: Date,
        modifiedAt: Date,
        lastLogin: Date,
        isAdmin: Boolean
    })

export const UserModel = model("user", userSchema);
