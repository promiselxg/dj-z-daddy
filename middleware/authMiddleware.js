// middleware/verifyToken.js
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      // Get token from header
      token = authHeader.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        res.status(403).send("Unauthorized Access");
        return;
      }

      next();
    } catch (error) {
      res.status(403).send("Unauthorized Access");
      return;
    }
  }

  if (!token) {
    res.status(401).send("Unauthorized Access, Token required.");
    return;
  }
};

export default authMiddleware;
