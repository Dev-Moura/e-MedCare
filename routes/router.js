import express from "express";
import AppointmentController from "./AppointmentController.js";
import DoctorController from "./DoctorController.js";
import PacientController from "./PacientController.js";
import PrescriptionController from "./PrescriptionController.js";
import doctorService from "../services/DoctorService.js";
import bcrypt from "bcrypt";
import verifyToken from "../middleware/authMiddleware.js";
let router = express.Router();

router.get("/", function (req, res) {
  console.log("hi!");
  res.status(200).json({ message: "hi!" });
});

// mapeando login
router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    const doctor = await doctorService.getDoctorByLogin(login);

    if (!doctor) {
      return res.status(401).json({ error: "Authentication failed!" });
    }

    const passwordMatch = await bcrypt.compare(password, doctor.password);
    if (!password) {
      return res.status(401).json({ error: "Authentication failed!" });
    }

    const token = jwt.sign({ doctorId: doctor._id }, "you-secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "login failed" });
  }
});
router.use("/", verifyToken, AppointmentController); // vai usar a "/" para navegar entre as pastas
router.use("/", verifyToken, DoctorController);
router.use("/", verifyToken, PacientController);
router.use("/", verifyToken, PrescriptionController);

export default router;
