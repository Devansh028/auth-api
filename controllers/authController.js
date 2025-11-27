import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createAccessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "15m" });
};

const createRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

export const register = async (req, res) => {
  try {
    const { name, email, password, referredBy } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already used" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const referralCode = name.substring(0, 3).toUpperCase() + Date.now().toString().slice(-4);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      referralCode,
      referredBy: referredBy || null
    });
    if (referredBy) {
      const referrer = await User.findOne({ referralCode: referredBy });

      if (referrer) {
        referrer.credits += 2;
        newUser.credits += 2;
        referrer.referrals.push({
          userId: newUser._id,
          date: new Date()
        });
        await referrer.save();
        await newUser.save();
      }
    }
    res.status(201).json({ message: "User Registered Successfully", newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      message: "Login Successful",
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) return res.status(401).json({ message: "No token" });

    const user = await User.findOne({ refreshToken });
    if (!user) return res.status(403).json({ message: "Invalid refresh token" });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Token expired" });

      const newAccessToken = createAccessToken(decoded.id);

      res.json({ accessToken: newAccessToken });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    await User.updateOne({ refreshToken }, { $unset: { refreshToken: 1 } });

    res.json({ message: "Logged out" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const profile = async (req, res) => {
  res.json({ message: "Protected route success", user: req.user });
};
