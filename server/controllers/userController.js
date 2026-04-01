import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId;
    // console.log(req.userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      credits: user.credits,
    });
  } catch (error) {
    return res.status(500).json({
      message: `failed to get current user ${error}`,
    });
  }
};
