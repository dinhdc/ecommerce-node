import {Router} from 'express';

import userRoutes from "./user.routes"
import categoryRoutes from "./product.category";

const routes = Router();


routes.use("/api/users", userRoutes)
routes.use("/api/products", categoryRoutes)

routes.get("/", (req, res) => {
    res.send("It works!")
})
export default routes