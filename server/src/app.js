import express from "express";
import cors from "cors";
import auth from "./routes/auth.routes.js";
import item from "./routes/item.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api", item);

app.use((req, res, next) => {
  res.status(404).send("404 - Page Not Found");
});

export default app;
