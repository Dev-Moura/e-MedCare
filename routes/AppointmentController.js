import express from "express";
import AppointmentService from "../services/AppointmentService.js";

let router = express.Router();

router.get("/Appointments", async (req, res) => {
  try {
    const appointments = await AppointmentService.getAllAppointments();
    res.send(appointments);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/getAppointment/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await AppointmentService.getAppointment(id);
    res.send(appointment);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/postAppointment", async (req, res) => {
  const { date, doctorId, pacientId } = req.body;

  try {
    const appointment = await AppointmentService.saveAppointment({
      date,
      doctorId,
      pacientId,
    });
    res.send(appointment);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.put("/Appointment/:id", async (req, res) => {
  const { id } = req.params;
  const { date, doctorId, pacientId } = req.body;

  try {
    const appointment = await AppointmentService.updateAppointment(id, {
      date,
      doctorId,
      pacientId,
    });
    res.status(201).send(appointment);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.delete("/Appointment/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await AppointmentService.deleteAppointment(id);
    res.send(appointment);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

export default router;
