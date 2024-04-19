import { Router } from "express";
import {
  addItem,
  getItems,
  getUserItems,
  deleteUserItem,
} from "../controllers/item.controllers.js";

const router = Router();

router.post("/item", addItem);
router.get("/item", getItems);
router.get("/item/:id", getUserItems);
router.delete("/item/:id", deleteUserItem);

export default router;
