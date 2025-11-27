import express from "express";
import { 
  getAllUsers, 
  getUser, 
  updateUser, 
  deleteUser, 
  searchUsers, 
  paginateUsers 
} from "../controllers/userController.js";

import { auth } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

router.get("/search/query", auth, isAdmin, searchUsers);
router.get("/paginate/users", auth, isAdmin, paginateUsers);
router.get("/", auth, isAdmin, getAllUsers);
router.get("/:id", auth, getUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, isAdmin, deleteUser);

export default router;
