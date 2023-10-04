import {Types} from "mongoose";

interface IBaseProduct {
    createdAt: Date;
    modifiedAt: Date;
}

export interface IProductCategory extends IBaseProduct{
    name: string;
    desc: string;
}

export interface IProductCategoryCU {
    name: string;
    desc: string;
}

export interface IProductInventory extends IBaseProduct{
    quantity: number;
}

export interface IProductDiscount extends IBaseProduct{
    name: string;
    desc: string;
    percent: number;
    active: boolean;
}

export interface IProduct extends IBaseProduct{
    name: string;
    desc: string;
    sku: string;
    price: number;
    categoryId: Types.ObjectId;
    inventoryId: Types.ObjectId;
    discountId: Types.ObjectId;
}