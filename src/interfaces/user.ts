import {Types} from 'mongoose';

export interface IUserAddress {
    addressLine1: string,
    addressLine2: string,
    city: string,
    postalCode: string,
    country: string,
    telephone: string,
    mobile: string,
    user: Types.ObjectId
}

export interface IBaseUser {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    createdAt: Date,
    modifiedAt: Date,
    lastLogin: Date
}

export interface IUser extends IBaseUser {
}

export interface IAdminUser extends IBaseUser {
    type: Types.ObjectId
}

export interface IUserAdminType {
    adminType: string,
    permission: string,
    createdAt: Date,
    modifiedAt: Date,
}
