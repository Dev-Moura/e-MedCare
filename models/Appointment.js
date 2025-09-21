import mongoose from "mongoose";

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, "Appointment Date is required."],
  },
  doctorId: {
    type: String,
    required: [true, "DoctorId Date is required."],
  },
  pacientId: {
    type: String,
    required: [true, "pacientId Date is required."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointment = mongoose.model("Appointment", appointmentSchema);

export default appointment;
