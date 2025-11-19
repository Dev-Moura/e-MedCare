import express from "express";
import pkg from "body-parser";
import router from "./routes/router.js";
import db from "./database/database.js";
import cors from "cors";
import axios from "axios";
import jwt from "jsonwebtoken";
import verifyToken from "./middleware/authMiddleware.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

app.post("/login", async (req, res) => {
  const { login, password, captchaToken } = req.body;

  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
  const { data } = await axios.post(verifyURL);

  if (!data.success) {
    return res.status(400).json({ error: "Filed recaptcha verfification." });
  }

  const user = await UserActivation.findOne({ login });
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "invalid Credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

app.use("/", router);

app.listen(3000, function () {
  console.log("Listening to port 3000");
});
