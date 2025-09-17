import { mongoose } from "mongoose";

const schema = mongoose.schema;

const pacientSchema = new schema({
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
