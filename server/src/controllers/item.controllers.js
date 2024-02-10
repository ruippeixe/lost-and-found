import { pool } from "../db.js";

export const addItem = async (req, res) => {
  const { what, who, where, date, time, email } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO items(what, who, where_location, date, time, email) VALUES (?, ?, ?, ?, ?, ?)",
    [what, who, where, date, time, email]
  );

  res.json(rows);
};
