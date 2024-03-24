import express from "express";
import cors from "cors";
import auth from "./routes/auth.routes.js";
import item from "./routes/item.routes.js";
import cookieParser from "cookie-parser"

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
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
