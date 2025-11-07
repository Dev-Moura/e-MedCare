import express from "express";
import PacientService from "../services/PacientService.js";

let router = express.Router();

router.get("/pacients", async (req, res) => {
  try {
    const pacients = await PacientService.getAllPacients();
    res.send(pacients);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send(e);
  }
});

router.get("/getPacient/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pacient = await PacientService.getPacient(id);
    res.send(pacient);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send(e);
  }
});

router.post("/postPacient", async (req, res) => {
  const { name, birthDate, email, phone } = req.body;
  try {
    const pacient = await PacientService.savePacient({
      name,
      birthDate,
      email,
      phone,
    });
    res.status(201).send(pacient);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send("Failure to register patient" + e);
  }
});

router.put("/pacients/:id", async (req, res) => {
  const { id } = req.params;
  const { name, birthDate, email, phone } = req.body;
  try {
    const pacient = await PacientService.updatePacient(id, {
      name,
      birthDate,
      email,
      phone,
    });
    res.status(201).send(pacient);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send(e);
  }
});

router.delete("/pacients/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pacient = await PacientService.deletePacient(id);
    res.status(201).send(pacient);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send(e);
  }
});

export default router;
