import { conn } from "../db.js";

export const getAllProducts = async (req, res) => {
  try {
    const sql = await conn.query("SELECT * FROM products");

    if(sql[0].length > 0) {
      res.json({ data: sql[0] });
    } else{
      res.status(404).json({ data: false}); 
    }

  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const getDetailProduct = async (req, res) => {

  try {
    let { name } = req.params;
    let formattedName = name.replace(/-/g, ' ');

    const sql = await conn.query("SELECT * FROM products WHERE LOWER(name) = LOWER(?)",[formattedName]);

    if(sql[0].length > 0) {
      res.json({ data: sql[0] });
    } else{
      res.status(404).json({ data: false}); 
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};
