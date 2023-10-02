import {Schema, model} from "mongoose";
import {IUserAdminType} from "../../interfaces";

const uAdminTypeSchema =
    new Schema<IUserAdminType>({
        adminType: String,
        permission: String,
        createdAt: Date,
        modifiedAt: Date,
    })

export const UAdminTypeModel = model("user_admin_type", uAdminTypeSchema);
