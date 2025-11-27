import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = await User.findById(decoded.id).select("-password");
    next();
  });
};
