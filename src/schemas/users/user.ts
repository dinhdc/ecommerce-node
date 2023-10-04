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

userSchema.pre('save', function (next){
    if(!this.createdAt) this.createdAt = new Date();
    this.modifiedAt = new Date();
    next();
})

export const UserModel = model("user", userSchema);
