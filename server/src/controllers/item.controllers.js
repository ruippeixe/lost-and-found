import { pool } from "../db.js";

export const addItem = async (req, res) => {
  const { what, who, place, date, time, email } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO items(what, who, place, date, time, email) VALUES (?, ?, ?, ?, ?, ?)",
    [what, who, place, date, time, email]
  );

  res.json(rows);
};

export const getItem = async (req, res) => {

    const [rows] = await pool.query("SELECT * FROM items");
    res.json(rows);

};