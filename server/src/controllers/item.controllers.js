import { JWT_KEY } from "../config.js";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const addItem = async (req, res) => {
  try {
    // Get user authentication via cookie
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json({ message: "Not authenticated." });

    // Verify JWT token
    const userInfo = await jwt.verify(token, JWT_KEY);
    if (!userInfo) return res.status(403).json({ message: "Invalid token." });

    const { what, who, place, date, time, email } = req.body;

    // Insert item into database
    await db.query(
      "INSERT INTO items(what, who, place, date, time, email, uid) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [what, who, place, date, time, email, userInfo.id]
    );

    return res.status(200).json({ message: "Item added successfully." });
  } catch (error) {
    console.error("Error adding item:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const getItems = async (req, res) => {
  // Retrieve items from the database
  try {
    const [rows] = await db.query("SELECT * FROM items");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching items:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const getUserItems = async (req, res) => {
  const userId = req.params.id;

  // Retrieve items associated with the specified user.
  try {
    const [rows] = await db.query("SELECT * FROM items WHERE uid = ?", userId);

    return res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching user items:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const deleteUserItem = async (req, res) => {
  // Get user authentication via cookie
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Not authenticated." });

  // Verify JWT token
  const userInfo = await jwt.verify(token, JWT_KEY);
  if (!userInfo) return res.status(403).json({ message: "Invalid token." });

  const itemId = req.params.id;

  // Deletes an item if authenticated.
  try {
    await db.query("DELETE FROM items WHERE `id` = ? AND `uid` = ?", [
      itemId,
      userInfo.id,
    ]);

    return res.status(200).json({ message: "Item has been deleted." });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(403).json({ message: "Something went wrong." });
  }
};

export const getUserEmail = async (req, res) => {
  const userId = req.params.id;

  // Retrieves the email of the user.
  try {
    const [rows] = await db.query(
      "SELECT email FROM users WHERE id = ?",
      userId
    );

    return res.status(200).json(rows[0].email);
  } catch (error) {
    console.error("Error fetching user items:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const updateUserEmail = async (req, res) => {
  // Get user authentication via cookie
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Not authenticated." });

  // Verify JWT token
  const userInfo = await jwt.verify(token, JWT_KEY);
  if (!userInfo) return res.status(403).json({ message: "Invalid token." });

  const userId = req.params.id;
  const userEmail = req.body.email;

  try {
    // Check if the newly entered email already exists for any user
    const [userData] = await db.query("SELECT * FROM users WHERE email = ?", [
      userEmail,
    ]);

    if (userData.length) {
      return res.status(409).json({ message: "Email already exists." });
    }

    // Updates the email of the user.
    await db.query("UPDATE users SET email = ? WHERE id = ?", [
      userEmail,
      userId,
    ]);

    return res.status(200).json({ message: "Email successfully updated." });
  } catch (error) {
    console.error("Error updating user email:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
