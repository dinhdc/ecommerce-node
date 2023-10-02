import {Schema, model} from "mongoose";
import {IUserAddress} from "../../interfaces";

const userAddressSchema =
    new Schema<IUserAddress>({
        addressLine1: String,
        addressLine2: String,
        city: String,
        postalCode: String,
        country: String,
        telephone: String,
        mobile: String,
        user: {
            ref: 'user',
            type: Schema.Types.ObjectId,
        },
    })

export const UserAddressModel = model("user_address", userAddressSchema);
