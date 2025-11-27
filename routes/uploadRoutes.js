import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { uploadProfilePic, uploadPostImages, uploadFile } from "../controllers/uploadController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: File upload APIs
 */

router.post("/profile", auth, uploadProfilePic);
router.post("/post", auth, uploadPostImages);
router.post("/file", auth, uploadFile);

export default router;
