import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authControllers.js";

const routerAuth = Router();

routerAuth.post("/register", registerUser);

routerAuth.post("/login", loginUser);

export default routerAuth;
