import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import referralRoutes from "./routes/referralRoutes.js";
import { swaggerSpec, swaggerUiMiddleware } from "./config/swagger.js";


dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/referral", referralRoutes);
app.use("/api-docs", swaggerUiMiddleware.serve, swaggerUiMiddleware.setup(swaggerSpec));


app.listen(5000, () => console.log("Server running on port 5000"));
