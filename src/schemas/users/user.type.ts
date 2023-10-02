import mongoose, {Schema, model} from "mongoose";
import {IUserAdminType} from "../../interfaces";

const uAdminTypeSchema =
    new Schema<IUserAdminType>({
        adminType: String,
        permission: String,
        createdAt: Date,
        modifiedAt: Date,
    })

export const UAdminTypeModel = mongoose.model("user_admin_type", uAdminTypeSchema);
