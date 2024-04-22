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

router.post("/", addItem);
router.get("/", getItems);
router.get("/:id", getUserItems);
router.delete("/:id", deleteUserItem);

router.get("/email/:id", getUserEmail);
router.put("/email/:id", updateUserEmail);

export default router;
