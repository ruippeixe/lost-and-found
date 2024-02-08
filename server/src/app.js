import express from "express";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).send("404 - Page Not Found");
});

export default app;
