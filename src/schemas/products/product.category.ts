import {model, Schema} from "mongoose"
import {IProductCategory} from "../../interfaces";

const ProductCategorySchema =
    new Schema<IProductCategory>({
        name: {
            type: String,
            required: true
        },
        desc: String,
        createdAt: Date,
        modifiedAt: Date
    })

ProductCategorySchema.pre('save', function (next){
    if(!this.createdAt) this.createdAt = new Date();
    this.modifiedAt = new Date();
    next();
})

export const ProductCategoryModel = model("product_category", ProductCategorySchema);