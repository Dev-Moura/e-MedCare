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
  medicalSpecialty,
  medicalRegistration,
  email,
  phone,
}) => {
  try {
    const doctorDetails = new Doctor({
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
  { name, login, password, medicalSpecialty, medicalRegistration, email, phone }
) => {
  try {
    return await Doctor.findByIdAndUpdate(
      id,
      {
        name,
        login,
        password,
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
    return await Doctor.findByIdAndDelete(id);
  } catch (e) {
    throw new Error(e);
  }
};

//login

const getDoctorByLogin = async (login) => {
  try {
    return await Doctor.findOne({ login: login });
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
  getDoctorByLogin,
};

export default doctorRepository;
