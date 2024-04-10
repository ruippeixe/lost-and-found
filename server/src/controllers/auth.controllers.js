import { pool as db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Checking for existing user
    const [userData] = await db.query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );

    // Check if username or email already exist
    if (userData.length) {
      const existingUser = userData.find((user) => user.username === username);
      const existingEmail = userData.find((user) => user.email === email);

      if (existingUser) {
        return res.status(409).json({ message: "Username already exists." });
      } else {
        return res.status(409).json({ message: "Email already exists." });
      }
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

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Checking for existing user
    const [userData] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (!userData.length) {
      return res.status(404).json({ message: "User not found." });
    }

    // Validate password against stored password
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      userData[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Password is invalid." });

    // Generates a JWT using the user ID and the JWT key
    const token = jwt.sign({ id: userData[0].id }, JWT_KEY);

    // Excludes password, sets token cookie, and sends user data
    const { password: userPassword, ...other } = userData[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({ message: "User has been logged out." });
};
