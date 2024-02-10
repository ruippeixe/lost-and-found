import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import item from "./routes/item.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use("/api", item);

app.use((req, res, next) => {
  res.status(404).send("404 - Page Not Found");
});

export default app;
