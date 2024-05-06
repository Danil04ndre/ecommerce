import { conn } from "../db.js";

export const getAllProducts = async (req, res) => {
  try {
    const sql = await conn.query("SELECT * FROM products");

    if (sql[0].length > 0) {
      res.json({ data: sql[0] });
    } else {
      res.status(404).json({ data: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    let { name } = req.params;
    let formattedName = name.replace(/-/g, " ");

    const sql = await conn.query(
      "SELECT * FROM products WHERE LOWER(name) = LOWER(?)",
      [formattedName]
    );

    if (sql[0].length > 0) {
      res.json({ data: sql[0] });
    } else {
      res.status(404).json({ data: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const buyProduct = async (req, res) => {
  try {
    let data = req.body;
    let verify = [];

    for (const product of data) {
      let { id_product, id_user, unit_price, quantity, total } = product;
      const sql = await conn.query(
        "INSERT INTO shopping (id_product, id_user,date, unit_price, quantity, total) VALUES (?, ?, ?, ?, ?, ?)",
        [id_product, id_user, new Date(), unit_price, quantity, total]
      );
      verify.push(sql);
    }

    if (verify.length > 0) {
      res.status(200).json({ msgBuy: true });
    } else {
      res.json({ msgBuy: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const getProductsBuy = async (req, res) => {
  try {
    let { id } = req.params;
    const sql = await conn.query(
      `SELECT products.name, shopping.date, shopping.unit_price, shopping.quantity, shopping.total
      FROM shopping
      JOIN products ON shopping.id_product = products.id_product
      JOIN users ON shopping.id_user = users.id_user
      WHERE users.id_user = ?`,
      [id]
    );
    res.json({ myProducts: sql[0] });
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};
