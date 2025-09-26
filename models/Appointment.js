import mongoose from "mongoose";
import Pacient from "./Pacient.js";
import Doctor from "./Doctor.js";

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Appointment Date is required."],
  },
  doctorId: {
    type: String,
    required: [true, "DoctorId Date is required."],
    validade: {
      validator: (v) => {
        const id = new mongoose.Types.ObjectId(v); // Convertendo uma Str em objeto ID para ser encontrado no banco
        return Doctor.exists({ _id: id });
      },
      message: (msg) => `DoctorID ${msg.value} not found.`,
    },
  },
  pacientId: {
    type: String,
    required: [true, "pacientId Date is required."],
    validade: {
      validator: (v) => {
        const id = new mongoose.Types.ObjectId(v); // Convertendo uma Str em objeto ID para ser encontrado no banco
        return Pacient.exists({ _id: id });
      },
      message: (msg) => `PacienID ${msg.value} not found.`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointment = mongoose.model("Appointment", appointmentSchema);

export default appointment;
