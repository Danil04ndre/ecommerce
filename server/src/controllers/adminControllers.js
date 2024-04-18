import { conn } from "../db.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));


export const createProduct = async (req, res) => {
  try {
    const { name, category, sub_category, description, price, stock } =
      req.body;
    const { id } = req.params
    const image = `http://localhost:3000/public/${req.file.filename}`;
    const sql = await conn.query(
      "INSERT INTO products (id_admin, name, category, sub_category, image, description, price, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [id, name, category, sub_category, image, description, price, stock]
    );
    if (sql[0].affectedRows > 0) {
      res.json({ productCreated: true });
    } else {
      res.status(404).json({ productCreated: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const readProducts = async (req,res) => {
  try {
    const {id} = req.params
    const sql = await conn.query("SELECT * FROM products WHERE id_admin = ?",id);

    if(sql[0].length > 0) {
      res.json({data: sql[0]});
    } else {
      res.json({data: null});
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }

};

export const updateProduct = async (req,res) => {
  try {
    const { name, category, sub_category, image, description, price, stock } = req.body;
    const { id } = req.params
    let newImage;

    if(req.file){
      //eliminar la imagen anterior (para que se inserte la nueva) de la carpeta uploads para evitar almacenamiento innecesario 
      const productData = await conn.query("SELECT image FROM products WHERE id_product = ?", [id]);
      if (productData[0][0].image) {
        const imagePath = productData[0][0].image.split("http://localhost:3000/public/")[1];
        const absoluteImagePath = path.join(__dirname, `../uploads/${imagePath}`);
        fs.unlinkSync(absoluteImagePath);
      }
      newImage = `http://localhost:3000/public/${req.file.filename}`;
    }
  
    const sql = await conn.query(
      "UPDATE products SET name = ?, category = ?, sub_category = ?, image = ?, description = ?, price = ?, stock = ? WHERE id_product = ?",
      [name, category, sub_category, image ? image : newImage, description, price, stock, id]
    ); 

    if(sql[0].affectedRows > 0){
      res.json({update: true})
    } else {
      res.status(404).json({update: false})
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const deleteProdcut = async (req,res) => {
  try {
    const { id } = req.params;

    const productData = await conn.query("SELECT image FROM products WHERE id_product = ?", [id]);

    if(productData[0][0].image){
      const imagePath = productData[0][0].image.split("http://localhost:3000/public/")[1];
      const absoluteImagePath = path.join(__dirname, `../uploads/${imagePath}`);
      fs.unlinkSync(absoluteImagePath);

      const sql = await conn.query("DELETE FROM products WHERE id_product = ?",[id]);
      if(sql[0].affectedRows){
        res.json({delete: true})
      }else{
        res.status(404).json({delete: false})
      }
    }

  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
}