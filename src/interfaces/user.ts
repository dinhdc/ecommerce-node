import {Types} from 'mongoose';
import {Request} from 'express'

export interface IUserAddress {
    addressLine1: string,
    addressLine2: string,
    city: string,
    postalCode: string,
    country: string,
    telephone: string,
    mobile: string,
    createdAt: Date,
    modifiedAt: Date,
    user: Types.ObjectId
}

export interface IBaseUser {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    createdAt: Date,
    modifiedAt: Date,
    lastLogin: Date,
    isAdmin: Boolean
}

export type SignUpType = Omit<IBaseUser, "createdAt" | "modifiedAt" | "lastLogin">

export interface ISignUp extends  SignUpType{}

export interface IUser extends Partial<IBaseUser> {
}

export interface AuthRequest extends Request {
    user?: Omit<IUser, "password">;
    token?: string;
}
