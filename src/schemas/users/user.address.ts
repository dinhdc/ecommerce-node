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
        createdAt: Date,
        modifiedAt: Date
    })

userAddressSchema.pre('save', function (next){
    if(!this.createdAt) this.createdAt = new Date();
    this.modifiedAt = new Date();
    next();
})

export const UserAddressModel = model("user_address", userAddressSchema);
