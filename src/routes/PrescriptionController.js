import express from "express";
import PrescriptionService from "../services/PrescriptionService.js";

let router = express.Router();

router.get("/prescriptions", async (req, res) => {
  try {
    const prescriptions = await PrescriptionService.getAllPrescriptions();
    res.send(prescriptions);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/getPrescription/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    res.send(prescription);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/postPrescription", async (req, res) => {
  const { date, appointmetId, medicine, dosage, instructions } = req.body;
  try {
    const prescription = await PrescriptionService.savePrescription({
      date,
      appointmetId,
      medicine,
      dosage,
      instructions,
    });
    res.status(201).send(prescription);
  } catch (e) {
    console.log(e);
    res.status(500).send("Failure to register prescription" + e);
  }
});

router.put("/prescriptions/:id", async (req, res) => {
  const { id } = req.params;
  const { date, appointmetId, medicine, dosage, instructions } = req.body;
  try {
    const prescription = await PrescriptionService.updatePrescription(id, {
      date,
      appointmetId,
      medicine,
      dosage,
      instructions,
    });
    res.status(201).send(prescription);
  } catch (e) {
    s;
    console.log(e);
    res.status(500).send(e);
  }
});

router.delete("/prescriptions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.deletePrescription(id);
    res.send(prescription);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

export default router;
