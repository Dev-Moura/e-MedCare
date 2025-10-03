import prescription from "../models/Prescription.js";
import PrescriptionRepository from "../repository/PrescriptionRepository.js";
import AppointmentService from "../services/AppointmentService.js";
import PacientService from "../services/PacientService.js";
import DoctorService from "../services/DoctorService.js";
import fs from "fs";
import PDFDocument from "pdfkit";
import doc from "pdfkit";

const getAllPrescriptions = async () => {
  return PrescriptionRepository.getAllPrescriptions();
};

const getPrescription = async (id) => {
  return PrescriptionRepository.getPrescription(id);
};

const savePrescription = async ({
  date,
  appointmetId,
  medicine,
  dosage,
  instructions,
}) => {
  return PrescriptionRepository.savePrescription({
    date,
    appointmetId,
    medicine,
    dosage,
    instructions,
  });
};

const updatePrescription = async (
  id,
  { date, appointmetId, medicine, dosage, instructions, file }
) => {
  return PrescriptionRepository.updatePrescription(id, {
    date,
    appointmetId,
    medicine,
    dosage,
    instructions,
    file,
  });
};

const deletePrescription = async (id) => {
  return PrescriptionRepository.deletePrescription(id);
};

const generatePresciptionFile = async (prescription) => {
  const appointment = await AppointmentService.getAppointment(
    prescription.appointmentId
  );
  const pacient = await PacientService.getPacient(appointment.pacientId);
  const doctor = await DoctorService.getDoctor(appointment.doctorId);

  const id = prescription._id;
  const document = new PDFDocument({ font: "Courier" });
  const filePath = "./E-MEDCARE/prescription/" + id + ".pdf";

  document.pipe(fs.createWriteStream(filePath));
  document.fontSize(16).text("Pacient Name: " + pacient.name);
  document.fontSize(16).text("Doctor Name: " + doctor.name);

  const recipe = "Medicine: " + prescription.medicine;
  document.fontSize(12).text(recipe);

  document.fontSize(12).text("Dosage: " + prescription.dosage);
  document.fontSize(12).text("Instructions: " + prescription.dosage);

  document.end();

  return prescription;
};

const prescriptionService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
  generatePresciptionFile,
};

export default prescriptionService;
