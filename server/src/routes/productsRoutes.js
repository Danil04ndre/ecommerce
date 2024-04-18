import { Router } from "express";
import { getAllProducts } from "../controllers/productsControllers.js";

const routerProducts = Router();

routerProducts.get("/get-all-products",getAllProducts);

export default routerProducts;