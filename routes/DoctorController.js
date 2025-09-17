import express from "express";
import DoctorService from "../services/DoctorService";

let router = express.Router();

router.get("/Doctors", async (req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.send(doctors);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/getDoctor/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorService.getDoctor(id);
    res.send(doctor);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/postDoctor", async (req, res) => {
  const {
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = await DoctorService.saveDoctor({
      name,
      login,
      password: hashedPassword,
      medicalSpecialty,
      medicalRegistration,
      email,
      phone,
    });
    res.status(201).send(doctor);
  } catch (e) {
    console.log(e);
    res.status(500).send("Failure to register doctor" + e);
  }
});

router.put("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    login,
    password,
    medicalSpecialty,
    medicalRegistration,
    email,
    phone,
  } = req.body;
  try {
    const doctor = await DoctorService.updateDoctor(id, {
      name,
      login,
      password,
      medicalSpecialty,
      medicalRegistration,
      email,
      phone,
    });
    res.send(doctor);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.delete("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorService.deleteDoctor(id);
    res.send(doctor);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

export default router();
