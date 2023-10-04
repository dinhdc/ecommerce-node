import {Request, Response} from "express";
import {ProductCategoryModel} from "../../schemas"
import {IProductCategoryCU} from "../../interfaces";


type PostRequest<T> = Request & { body: T }

const getAllCategory = async (req: Request, res: Response) => {
    const categories = await ProductCategoryModel.find();
    return res.send(categories).status(200)
}

const createCategory = async (req: PostRequest<IProductCategoryCU>, res: Response)=> {
    const category = req.body;
    await ProductCategoryModel.create(category)
    return res.send({"message": "created"}).status(201)
}

const getCategory = async (req: Request, res: Response) => {
    const {id} = req.params
    const category = await ProductCategoryModel.findOne({_id: id})
    return res.send(category).status(200)
}

const updateCategory = async (req: PostRequest<IProductCategoryCU>, res: Response) => {
    const {id} = req.params
    const newCategory = req.body;
    await ProductCategoryModel.findByIdAndUpdate(id, newCategory)
    return res.send({"message": "updated"}).status(200)
}

const deleteCategory = async (req: Request, res: Response) => {
    const {id} = req.params
    await ProductCategoryModel.findByIdAndDelete(id)
    return res.send().status(204)
}


export const ProductCategoryController = {
    getAllCategory,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
}
