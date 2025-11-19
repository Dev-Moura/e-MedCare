import express from "express";

import AppointmentController from "./AppointmentController.js";
import PrescriptionController from "./PrescriptionController.js";
import PacientController from "./PacientController.js";
import DoctorController from "./DoctorController.js";

import verifyToken from "../middleware/authMiddleware.js";

import doctorService from "../services/DoctorService.js";
import pacientService from "../services/PacientService.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hi!" });
});

// ==========================
// LOGIN
// ==========================
router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;

    const doctor = await doctorService.getDoctorByLogin(login);

    if (!doctor) {
      return res.status(401).json({ error: "Authentication failed!" });
    }

    const passwordMatch = await bcrypt.compare(password, doctor.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed!" });
    }

    const token = jwt.sign(
      { doctorId: doctor._id },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Login failed" });
  }
});

// ==========================
// FORGET PASSWORD
// ==========================
router.post("/forgetPassword", async (req, res) => {
  try {
    const { email } = req.body;
    const doctor = await doctorService.getDoctorByEmail(email);

    if (!doctor) {
      return res.status(404).json({ error: "Email not found" });
    }

    // Aqui você poderia gerar token e enviar email
    return res.status(200).json({ message: "Recovery email sent" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Email failed" });
  }
});

// ==========================
// REGISTRATION
// ==========================
router.post("/registration", async (req, res) => {
  try {
    const {
      name,
      login,
      password,
      medicalSpecialty,
      medicalRegistration,
      email,
      birthDate,
    } = req.body;

    const createdDoctor = await doctorService.saveDoctor({
      name,
      login,
      password,
      medicalSpecialty,
      medicalRegistration,
      email,
      birthDate,
    });

    if (!createdDoctor) {
      return res.status(400).json({ error: "Failed to create doctor account" });
    }

    const createdPacient = await pacientService.savePacient({
      name,
      login,
      password,
      email,
      birthDate,
    });

    if (!createdPacient) {
      return res
        .status(400)
        .json({ error: "Failed to create pacient account" });
    }

    const payload = {
      doctorId: createdDoctor._id,
      pacientId: createdPacient._id,
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Registration failed" });
  }
});

// ==========================
// PROTECTED ROUTES
// ==========================
router.use("/", verifyToken, AppointmentController);
router.use("/", verifyToken, DoctorController);
router.use("/", verifyToken, PacientController);
router.use("/", verifyToken, PrescriptionController);

export default router;
