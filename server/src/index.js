import express from "express";
import cors from "cors";
import routerAuth from "./routes/authRoutes.js";
import dotenv from 'dotenv';
import routerAdmin from "./routes/adminRoutes.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import routerProducts from "./routes/productsRoutes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())
app.get("/",(req,res) => {
  res.json({ok: "s"})
})
app.use("/public",express.static(path.join(__dirname, "./uploads")))

app.use(routerAuth);
app.use(routerAdmin);
app.use(routerProducts);

app.listen(3000, () => {
  console.log("port 3000 listen");
});
