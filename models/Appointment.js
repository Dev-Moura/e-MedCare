import { mongoose } from "mongoose";

const schema = mongoose.schema;

const appointmentSchema = new schema({
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
