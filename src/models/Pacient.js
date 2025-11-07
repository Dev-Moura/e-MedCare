import mongoose from "mongoose";

const { Schema } = mongoose;

const pacientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pacient name is required."],
  },
  birthDate: {
    type: String,
    require: [true, "Date of birth is required."],
  },
  email: {
    type: String,
<<<<<<< HEAD
    required: [true, "Email is required."],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
=======
    required: [true, "Email contact is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
>>>>>>> origin/implementation-jwt
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const pacient = mongoose.model("Pacient", pacientSchema);

export default pacient;
