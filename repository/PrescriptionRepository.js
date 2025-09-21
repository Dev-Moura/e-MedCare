import Prescription from "../models/Prescription.js";

const getAllPrescriptions = async () => {
  return await Prescription.find();
};

const getPrescription = async (id) => {
  try {
    return await Prescription.findById(id);
  } catch (e) {
    throw new Error(e);
  }
};

const savePrescription = async ({
  date,
  appointmetId,
  medicine,
  dosage,
  instructions,
}) => {
  try {
    const prescriptionDetails = new Prescription({
      date,
      appointmetId,
      medicine,
      dosage,
      instructions,
    });
    return await prescriptionDetails.save();
  } catch (e) {
    throw new Error(e);
  }
};

const updatePrescription = async (
  id,
  { date, appointmetId, medicine, dosage, instructions }
) => {
  try {
    return await pacient.findByIdAndUpdate(
      id,
      {
        date,
        appointmetId,
        medicine,
        dosage,
        instructions,
      },
      {
        new: true,
      }
    );
  } catch (e) {
    throw new Error(e);
  }
};

const deletePrescription = async (id) => {
  try {
    return await Prescription.findByIdAndDelete(id);
  } catch (e) {
    throw new Error(e);
  }
};

const prescriptionRepository = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
};

export default prescriptionRepository;
