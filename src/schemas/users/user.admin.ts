import {Schema, model} from "mongoose";
import {IAdminUser} from "../../interfaces";

const userAdminSchema =
    new Schema<IAdminUser>({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: String,
        lastName: String,
        createdAt: Date,
        modifiedAt: Date,
        lastLogin: Date,
        type: {
            ref: "user_admin_type",
            type: Schema.Types.ObjectId
        }
    })

export const UserAdminModel = model("user_admin", userAdminSchema);
