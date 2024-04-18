import { conn } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, admin } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const emailExists = await conn.query(
      "SELECT email FROM users WHERE email = ?",
      [email]
    );
    if (emailExists[0].length > 0) {
      return res.json({ emailExists: true });
    }

    const sql = await conn.query(
      "INSERT INTO users (name,email,password,admin) VALUES (?,?,?,?)",
      [name, email, hashedPassword, admin]
    );
    if (sql[0].affectedRows > 0) {
      res.json({ created: true });
    } else {
      res.status(404).json({ created: false });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = await conn.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (sql[0].length > 0) {
      const passwordDb = sql[0][0].password;
      const decryptedPassword = await bcrypt.compare(password, passwordDb);
      if (decryptedPassword) {

        const tokenData = {
          id: sql[0][0].id_user,
          name: sql[0][0].name,
          email: sql[0][0].email,
        };
        if (sql[0][0].admin === 1) {
          tokenData.admin = true;
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY,{expiresIn: '10h'});
        res.cookie("jwt", token);
        res.json({ success : true });
      } else {
        res.json({ incorrectAccount: true });
      }
    } else {
      res.json({ incorrectAccount: true });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};
