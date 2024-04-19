import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { CLIENT_URL } from "./config.js";

import auth from "./routes/auth.routes.js";
import item from "./routes/item.routes.js";

const app = express();

const corsOptions = {
  origin: CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", auth);
app.use("/api", item);

app.use((req, res, next) => {
  res.status(404).send("404 - Page Not Found");
});

export default app;
