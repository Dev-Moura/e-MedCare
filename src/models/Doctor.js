import mongoose from "mongoose";

const { Schema } = mongoose;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Doctor name is required."],
  },
  login: {
    type: String,
    required: [true, "Login is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    validade: {
      validator: (v) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(
          v
        );
      },
      message: (msg) =>
        `${msg.value} Your password required. Following the exemple: J34@abc5.`,
    },
  },
  medicalSpecialty: {
    type: String,
    required: [true, "Medical Speciality is required."],
  },
  medicalRegistration: {
    type: String,
    required: [true, "Medical Registration is required."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email contact is required."],
    validade: {
      validator: (v) => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          v
        );
      },
      message: (msg) =>
        `${msg.value} This is not a valid e-mail value. Please try again.`,
    },
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
    validade: {
      validator: (v) => {
        return /\d(2) 9\d(4)-\d(4)/.test(v); //REGEX
      },
      message: (msg) =>
        `${msg.value} This is not a valid phone value. Please use the following format (99) 99999-9999`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const doctor = mongoose.model("Doctor", doctorSchema);

export default doctor;
