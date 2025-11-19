import mongoose from "mongoose";

const { Schema } = mongoose;

const pacientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pacient name is required."],
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

  birthDate: {
    type: String,
    require: [true, "Date of birth is required."],
  },
  email: {
    type: String,
    required: [true, "Email contact is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient;
