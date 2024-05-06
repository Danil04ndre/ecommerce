import { Router } from "express";
import { buyProduct, getAllProducts, getDetailProduct, getProductsBuy } from "../controllers/productsControllers.js";
import { verifyUserToken } from "../middlewares/tokenVerifyMiddleware.js";

const routerProducts = Router();

routerProducts.get("/get-all-products",getAllProducts);

routerProducts.get("/get-detail-product/:name",getDetailProduct);

routerProducts.post("/buy-product",verifyUserToken,buyProduct);

routerProducts.get("/get-products-buy/:id",verifyUserToken,getProductsBuy);
export default routerProducts;