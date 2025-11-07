import jwt from "jsonwebtoken";

<<<<<<< HEAD
function verifyToken(req, res, next) {
=======
function verifyToken(erq, res, next) {
>>>>>>> origin/implementation-jwt
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access Denied!" });
  }

  try {
    const decoded = jwt.verify(token, "you-secret-key");
    req.doctorId = decoded.doctorId;
    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid token!" });
  }
}

export default verifyToken;
