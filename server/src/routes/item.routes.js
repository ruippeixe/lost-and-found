import { Router } from "express";
import { addItem, getItem } from "../controllers/item.controllers.js";

const router = Router();

router.post("/item", addItem);
router.get("/item", getItem);

export default router;
