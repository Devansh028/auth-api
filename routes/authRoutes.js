import express from "express";
import { register, login, refresh, logout, profile } from "../controllers/authController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/profile", auth, profile);

export default router;
