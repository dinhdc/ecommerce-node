import {Router} from 'express';
import {ProductCategoryController} from "../controllers";
import {adminGuard, authGuard} from "../middlewares";

const categoryRoutes = Router();

categoryRoutes.get("/categories", ProductCategoryController.getAllCategory);
categoryRoutes.get("/categories/:id", ProductCategoryController.getCategory);
categoryRoutes.post("/categories", authGuard, adminGuard, ProductCategoryController.createCategory);
categoryRoutes.put("/categories/:id", authGuard, adminGuard, ProductCategoryController.updateCategory);
categoryRoutes.delete("/categories/:id", authGuard, adminGuard, ProductCategoryController.deleteCategory);

export default categoryRoutes
