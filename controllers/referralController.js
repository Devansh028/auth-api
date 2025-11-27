import User from "../models/User.js";

export const referralDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.json({
      referralCode: user.referralCode,
      totalCredits: user.credits,
      totalReferrals: user.referrals.length,
      referrals: user.referrals
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const referralHistory = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.json({
      referrals: user.referrals
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
