import express from "express";
import bcrypt from "bcrypt";
import PacientService from "../services/PacientService.js";

let router = express.Router();

router.get("/pacients", async (req, res) => {
  try {
    const pacients = await PacientService.getAllPacients();
    res.send(pacients);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/getPacient/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pacient = await PacientService.getPacient(id);
    res.send(pacient);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/postPacient", async (req, res) => {
  const { name, login, password, birthDate, email, phone } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const pacient = await PacientService.savePacient({
      name,
      login,
      password: hashedPassword,
      birthDate,
      email,
      phone,
    });
    res.status(201).send(pacient);
  } catch (e) {
    console.log(e);
    res.status(500).send("Failure to register patient" + e);
  }
});

router.put("/pacients/:id", async (req, res) => {
  const { id } = req.params;
  const { name, birthDate, email, phone } = req.body;
  try {
    const pacient = await PacientService.updatePacient(id, {
      name,
      login,
      password,
      birthDate,
      email,
      phone,
    });
    res.status(201).send(pacient);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.delete("/pacients/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pacient = await PacientService.deletePacient(id);
    res.status(201).send(pacient);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

export default router;
