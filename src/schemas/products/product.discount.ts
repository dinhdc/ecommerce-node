import {model, Schema} from "mongoose"
import {IProductDiscount} from "../../interfaces";

const ProductDiscountSchema =
    new Schema<IProductDiscount>({
        name: {
            type: String,
            required: true
        },
        percent: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            default: true
        },
        desc: String,
        createdAt: Date,
        modifiedAt: Date
    })

ProductDiscountSchema.pre('save', function (next){
    if(!this.createdAt) this.createdAt = new Date();
    this.modifiedAt = new Date();
    next();
})

export const ProductDiscountModel = model("product_discount", ProductDiscountSchema);