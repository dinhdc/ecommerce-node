import {Router} from 'express';
import Controller from "../controllers"
const userRoutes = Router();

userRoutes.post("/signup", Controller.UserController.signUpFunction)

export default userRoutes