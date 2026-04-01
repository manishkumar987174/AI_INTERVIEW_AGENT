import jwt from "jsonwebtoken";

const genToken = async (userID) => {
  try {
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign({ userId: userID }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("Token error", error);
  }
};

export default genToken;
