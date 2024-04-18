import { Router } from "express";
import {
  addItem,
  getItem,
  getUserItems,
  deleteUserItem,
} from "../controllers/item.controllers.js";

const router = Router();

router.post("/item", addItem);
router.get("/item", getItem);
router.get("/item/:id", getUserItems);
router.delete("/item/:id", deleteUserItem);

export default router;
