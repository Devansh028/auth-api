import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";
import { makeAdmin, blockUser, unblockUser, adminStats } from "../controllers/adminController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin operations
 */

/**
 * @swagger
 * /api/admin/make-admin/{id}:
 *   put:
 *     summary: Promote a user to admin
 *     tags: [Admin]
 */
router.put("/make-admin/:id", auth, isAdmin, makeAdmin);

/**
 * @swagger
 * /api/admin/block-user/{id}:
 *   put:
 *     summary: Block a user
 *     tags: [Admin]
 */
router.put("/block-user/:id", auth, isAdmin, blockUser);

/**
 * @swagger
 * /api/admin/unblock-user/{id}:
 *   put:
 *     summary: Unblock a user
 *     tags: [Admin]
 */
router.put("/unblock-user/:id", auth, isAdmin, unblockUser);

/**
 * @swagger
 * /api/admin/stats:
 *   get:
 *     summary: Get platform statistics
 *     tags: [Admin]
 */
router.get("/stats", auth, isAdmin, adminStats);

export default router;
