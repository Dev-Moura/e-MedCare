import Doctor from "../models/Doctor.js";

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
  name,
  login,
  password,
  medicalSpeciality,
  medicalRegistration,
  email,
  phone,
}) => {
  try {
    const doctorDetails = new Doctor({
      name,
      login,
      password,
      medicalSpeciality,
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
  {
    name,
    login,
    password,
    medicalSpeciality,
    medicalRegistration,
    email,
    phone,
  }
) => {
  try {
    return await Doctor.findByIdAndUpdate(
      id,
      {
        name,
        login,
        password,
        medicalSpeciality,
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
    return await Doctor.findByIdAndDelete(id);
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
