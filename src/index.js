import express from "express";
import pkg from "body-parser";
import router from "./routes/router.js";
import db from "./database/database.js";
<<<<<<< HEAD
import cors from "cors";
=======
>>>>>>> origin/implementation-jwt

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(cors());

app.listen(3001, function () {
  console.log("Listening to port 3001");
=======

app.listen(3000, function () {
  console.log("Listening to port 3000");
>>>>>>> origin/implementation-jwt
});

app.use("/", router);
