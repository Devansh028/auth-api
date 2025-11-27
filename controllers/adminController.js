import User from "../models/User.js";

export const makeAdmin = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role: "admin" }, { new: true });
    res.json({ message: "User promoted to admin", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const blockUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true });
    res.json({ message: "User blocked", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const unblockUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: false }, { new: true });
    res.json({ message: "User unblocked", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const adminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const blockedUsers = await User.countDocuments({ isBlocked: true });
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const newUsersToday = await User.countDocuments({
      createdAt: { $gte: today }
    });
    const firstDayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const newUsersMonth = await User.countDocuments({
      createdAt: { $gte: firstDayMonth }
    });
    res.json({
      totalUsers,
      totalAdmins,
      blockedUsers,
      newUsersToday,
      newUsersMonth
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
