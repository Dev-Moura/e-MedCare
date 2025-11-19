import PacientRepository from "../repository/PacientRepository.js";

const getAllPacients = async () => {
  return PacientRepository.getAllPacients();
};

const getPacient = async (id) => {
  return PacientRepository.getPacient(id);
};

const savePacient = async ({
  name,
  login,
  password,
  birthDate,
  email,
  phone,
}) => {
  return PacientRepository.savePacient({
    name,
    login,
    password,
    birthDate,
    email,
    phone,
  });
};

const updatePacient = async (
  id,
  { name, login, password, birthDate, email, phone }
) => {
  return PacientRepository.updatePacient(id, {
    name,
    login,
    password,
    birthDate,
    email,
    phone,
  });
};

const deletePacient = async (id) => {
  return PacientRepository.deletePacient(id);
};

const pacientService = {
  getAllPacients,
  getPacient,
  savePacient,
  updatePacient,
  deletePacient,
};

export default pacientService;
