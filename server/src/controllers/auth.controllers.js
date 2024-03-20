import { pool as db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Checking for existing user
    const [userData] = await db.query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );

    if (userData.length) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Hashing password for security
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Inserting new user data into the database
    await db.query(
      "INSERT INTO users(`username`,`email`,`password`) VALUES (?, ?, ?)",
      [username, email, hash]
    );

    return res.status(200).json({ message: "User has been created." });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
