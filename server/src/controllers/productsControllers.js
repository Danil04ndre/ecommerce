import { conn } from "../db.js";

export const getAllProducts = async (req, res) => {
  try {
    const sql = await conn.query("SELECT * FROM products");

    res.json({data: sql[0]});
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};
