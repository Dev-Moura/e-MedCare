import express from "express";
import AppointmentController from "./AppointmentController.js";
import DoctorController from "./DoctorController.js";
import PacientController from "./PacientController.js";
import PrescriptionController from "./PrescriptionController.js";
import doctorService from "../services/DoctorService.js";
import bcrypt from "bcrypt";
<<<<<<< Updated upstream:routes/router.js
import verifyToken from "../middleware/authMiddleware.js";
=======
import pacientService from "../services/PacientService.js";
import doctor from "../models/Doctor.js";
import pacient from "../models/Pacient.js";

>>>>>>> Stashed changes:src/routes/router.js
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

<<<<<<< Updated upstream:routes/router.js
//mapear recuperação de senha

router.get("/forgetPassword", async (req, res) => {
  try {
    const {email} = req.body;
    const doctor = await doctorService.getDoctor(email);

    if(!doctor) {
      return res.status(401).json({error: "email not found"})
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "e-mail failed"})
  } 
});
=======
// Maping registration

router.post("/registration", async (req, res) => {
  try {
    const { name, login, password, medicalSpecialty, medicalRegistration, email, birthDate} = req.body;
    const createDoctor = await doctorService.saveDoctor({name, login, password, medicalSpecialty, medicalRegistration, email, birthDate })
   
    
    if(!createDoctor){
      return res.status(401).json({ error: "Failed to create account"})
    }
    
    const createPacient = await pacientService.savePacient({name, login, password, email, birthDate })
    
    if (!createPacient) {
      return res.status(401).json({ error: "Failed to create a registration"});
    }

    let payload;

    if (createDoctor) {
      payload = { createDoctor: createDoctor._id };
    } else if (createPacient) {
      payload = { createPacient: createPacient._id};
    }

    const token = jwt.sign(payload, "you-secret-key", {expiresIn: "1h"})
    res.status(200).json({ token }); 
  } catch {
    console.log(e);
    res.status(500).json({ error: "falied" });
  }
})

>>>>>>> Stashed changes:src/routes/router.js

router.use("/", verifyToken, AppointmentController); // vai usar a "/" para navegar entre as pastas
router.use("/", verifyToken, DoctorController);
router.use("/", verifyToken, PacientController);
router.use("/", verifyToken, PrescriptionController);

export default router;
