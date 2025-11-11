import Pacient from "../models/Pacient.js";

const getAllPacients = async () => {
  return await Pacient.find();
};

const getPacient = async (id) => {
  try {
    return await Pacient.findById(id);
  } catch (e) {
    throw new Error(e);
  }
};

const savePacient = async ({ name, login, password, birthDate, email, phone }) => {
  try {
    const pacientDetails = new Pacient({
      name,
      login,
      password,
      birthDate,
      email,
      phone,
    });
    return await pacientDetails.save();
  } catch (e) {
    throw new Error(e);
  }
};

const updatePacient = async (id, { name, login, password, birthDate, email, phone }) => {
  try {
    return await Pacient.findByIdAndUpdate(
      id,
      {
        name,
        login,
        password,
        birthDate,
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

const deletePacient = async (id) => {
  try {
    return await Pacient.findByIdAndDelete(id);
  } catch (e) {
    throw new Error(e);
  }
};

const pacientRepository = {
  getAllPacients,
  getPacient,
  savePacient,
  updatePacient,
  deletePacient,
};

export default pacientRepository;
