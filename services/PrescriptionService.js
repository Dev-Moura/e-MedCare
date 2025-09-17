import PrescriptionRepository from "../repository/PrescriptionRepository";

const getAllPrescriptions = async () => {
  return PrescriptionRepository.getAllPrescriptions();
};

const getPrescription = async (id) => {
  return PrescriptionRepository.getPrescription(id);
};

const savePrescription = async ({
  date,
  appointmetId,
  medicine,
  dosage,
  instructions,
}) => {
  return PrescriptionRepository.savePrescription({
    date,
    appointmetId,
    medicine,
    dosage,
    instructions,
  });
};

const updatePrescription = async (
  id,
  { date, appointmetId, medicine, dosage, instructions }
) => {
  return PrescriptionRepository.savePrescription(id, {
    date,
    appointmetId,
    medicine,
    dosage,
    instructions,
  });
};

const deletePrescription = async (id) => {
  return PrescriptionRepository.deletePrescription(id);
};

const prescriptionService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
  s,
};

export default prescriptionService;
