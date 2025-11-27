export const uploadProfilePic = async (req, res) => {
  try {
    req.uploadFolder = "uploads/profile";

    uploadSingleImage(req, res, async function (err) {
      if (err) return res.status(400).json({ message: err.message });

      const user = await User.findByIdAndUpdate(
        req.user._id,
        { profilePic: req.file.path },
        { new: true }
      );

      res.json({
        message: "Profile picture uploaded",
        file: req.file.path,
        user
      });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const uploadFile = (req, res) => {
  req.uploadFolder = "uploads/files";

  uploadAnyFile(req, res, function (err) {
    if (err) return res.status(400).json({ message: err.message });

    res.json({
      message: "File uploaded",
      file: req.file.path
    });
  });
};
export const uploadPostImages = async (req, res) => {
  try {
    req.uploadFolder = "uploads/posts";

    uploadMultipleImages(req, res, async function (err) {
      if (err) return res.status(400).json({ message: err.message });

      const filePaths = req.files.map(f => f.path);

      const post = await Post.create({
        user: req.user._id,
        caption: req.body.caption,
        images: filePaths
      });

      res.json({
        message: "Post images uploaded",
        post
      });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
