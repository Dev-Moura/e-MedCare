import express from "express";
import PrescriptionService from "../services/PrescriptionService.js";
<<<<<<< HEAD
import multer from "multer";
import process from "process";
import path from "path";

let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./E-MEDCARE/prescription/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/uploadPrescription/:id",
  upload.single("file"),
  async (req, res) => {
    try {
      const { id } = req.params;
      let prescription = await PrescriptionService.getPrescription(id);

      const file = "./E-MEDCARE/prescription/" + req.file.originalname;
      prescription = await PrescriptionService.updatePrescription(id, { file });

      return res.status(200).send(prescription);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  }
);

router.get("/readPrescription/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    let filePath = path.resolve(process.cwd() + "/../" + prescription.file);
    res.status(200).sendFile(filePath);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

=======

let router = express.Router();

>>>>>>> origin/implementation-jwt
router.get("/prescriptions", async (req, res) => {
  try {
    const prescriptions = await PrescriptionService.getAllPrescriptions();
    res.send(prescriptions);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send(e);
  }
});

router.get("/getPrescription/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    res.send(prescription);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
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
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
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
<<<<<<< HEAD
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send(e);
  }
});

router.delete("/prescriptions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.deletePrescription(id);
    res.send(prescription);
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
    res.status(500).send(e);
  }
});

router.get("/generatePrescription/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    const generatedPrescription =
      await PrescriptionService.generatePresciptionFile(prescription);
    res.send(generatedPrescription);
  } catch (e) {
    console.error(e);
=======
    console.log(e);
>>>>>>> origin/implementation-jwt
    res.status(500).send(e);
  }
});

export default router;
