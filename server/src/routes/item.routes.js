import { Router } from "express";
import {
  addItem,
  getItems,
  getUserItems,
  deleteUserItem,
  updateUserEmail,
  getUserEmail,
} from "../controllers/item.controllers.js";

const router = Router();

router.post("/item", addItem);
router.get("/item", getItems);
router.get("/item/:id", getUserItems);
router.delete("/item/:id", deleteUserItem);

router.get("/email/:id", getUserEmail);
router.put("/email/:id", updateUserEmail);

export default router;
