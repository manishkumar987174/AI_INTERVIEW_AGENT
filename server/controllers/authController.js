import genToken from "../config/token.js";
import User from "../models/userModel.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }
    const token = await genToken(user._id);
    res.cookie("token", token, {
      http: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    // console.log({
    //   token,
    //   ...user,
    // });
    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        credits: user.credits,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: `Google Auth Error ${error}`,
    });
  }
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "logout successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Logout error",
    });
  }
};
