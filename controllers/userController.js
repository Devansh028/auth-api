import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -refreshToken");
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password -refreshToken");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .select("-password -refreshToken");

    res.json({ message: "User updated", user: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const searchUsers = async (req, res) => {
  try {
    const { search, role, sort, page = 1, limit = 10 } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ];
    }
    if (role) {
      query.role = role;
    }
    const skip = (page - 1) * limit;
    let sortBy = {};
    if (sort === "latest") sortBy.createdAt = -1;
    if (sort === "oldest") sortBy.createdAt = 1;

    const users = await User.find(query)
      .select("-password -refreshToken")
      .skip(skip)
      .limit(Number(limit))
      .sort(sortBy);

    const totalUsers = await User.countDocuments(query);

    res.json({
      total: totalUsers,
      page: Number(page),
      limit: Number(limit),
      results: users.length,
      users
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const paginateUsers = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query;
    page = Number(page);
    limit = Number(limit);
    const skip = (page - 1) * limit;
    const users = await User.find()
      .select("-password -refreshToken")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalUsers = await User.countDocuments();
    res.json({
      totalUsers,
      page,
      limit,
      totalPages: Math.ceil(totalUsers / limit),
      hasNextPage: page * limit < totalUsers,
      hasPrevPage: page > 1,
      users
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
