import { Router } from "express";
import { getAllProducts, getDetailProduct } from "../controllers/productsControllers.js";

const routerProducts = Router();

routerProducts.get("/get-all-products",getAllProducts);

routerProducts.get("/get-detail-product/:name",getDetailProduct);
export default routerProducts;