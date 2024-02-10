import { Router } from "express";
import { addItem } from "../controllers/item.controllers.js";

const router = Router();

router.post("/item", addItem);

export default router;
