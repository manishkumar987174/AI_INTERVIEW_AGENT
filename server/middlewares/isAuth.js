import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token);

    if (!token) {
      return res.status(401).json({
        message: "User does not have a token",
      });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET); 

    if (!verifyToken) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    req.userId = verifyToken.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: `isAuth Error: ${error.message}`,
    });
  }
};

export default isAuth;
