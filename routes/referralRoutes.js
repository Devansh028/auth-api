import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { referralDashboard, referralHistory } from "../controllers/referralController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Referral
 *   description: Referral & credit system
 */

router.get("/dashboard", auth, referralDashboard);
router.get("/history", auth, referralHistory);

export default router;
