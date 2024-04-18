import { Router } from "express";
import { createProduct, deleteProdcut, readProducts, updateProduct } from "../controllers/adminControllers.js";
import { uploader } from "../middlewares/multerMiddleware.js";
import { verifyAdminToken } from "../middlewares/tokenVerifyMiddleware.js";


  
const routerAdmin = Router();
routerAdmin.post("/create-product/:id",verifyAdminToken,uploader.single('image'), createProduct);
routerAdmin.get("/read-products-admin/:id",verifyAdminToken, readProducts);
routerAdmin.put("/update-product/:id",verifyAdminToken,uploader.single('image'),updateProduct);
routerAdmin.delete("/delete-product/:id",verifyAdminToken,deleteProdcut);
export default routerAdmin;
