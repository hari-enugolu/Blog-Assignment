import express from "express";

import {
  getAllUser,
  login,
  signup,
  Admin,
} from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUser);

router.post("/signup", signup);
router.post("/login", login);
router.get("/admin", Admin);

export default router;
