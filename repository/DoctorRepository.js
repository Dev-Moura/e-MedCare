import { Doctor } from "../models/Doctor.js";

const getAllDoctors = async () => {
  return await Doctor.find();
};

const getDoctor = async (id) => {
  try {
    return await Doctor.findById(id);
  } catch (e) {
    throw new Error(e);
  }
};

const saveDoctor = async ({
  doctorId,
  name,
  login,
  password,
  medicalSpecialty,
  medicalRegistration,
  email,
  phone,
}) => {
  try {
    const doctorDetails = new Doctor({
      doctorId,
      name,
      login,
      password,
      medicalSpecialty,
      medicalRegistration,
      email,
      phone,
    });
    return await doctorDetails.save();
  } catch (e) {
    throw new Error(e);
  }
};

const updateDoctor = async (
  id,
  { doctorId, name, medicalSpecialty, medicalRegistration, email, phone }
) => {
  try {
    return await Doctor.findByIdAndUpdate(
      id,
      {
        doctorId,
        name,
        medicalSpecialty,
        medicalRegistration,
        email,
        phone,
      },
      {
        new: true,
      }
    );
  } catch (e) {
    throw new Error(e);
  }
};

const deleteDoctor = async (id) => {
  try {
    return await Doctor.findByIdAndUpdate(id);
  } catch (e) {
    throw new Error(e);
  }
};

const doctorRepository = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
};

export default doctorRepository;
