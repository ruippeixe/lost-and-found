import { pool } from "../db.js";

export const addItem = async (req, res) => {
  const { what, who, place, date, time, email } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO items(what, who, place, date, time, email) VALUES (?, ?, ?, ?, ?, ?)",
      [what, who, place, date, time, email]
    );
  } catch (error) {
    console.error("Error adding item:", error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const getItem = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM items");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching items:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
