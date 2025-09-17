import { Appointment } from "../models/Appointment.js";

const getAllAppoitments = async () => {
  return await Appointment.find();
};

const getAppointment = async (id) => {
  try {
    return await Appointment.findById(id);
  } catch (e) {
    throw new Error(e);
  }
};

const saveAppointment = async ({ date, doctorId, pacientId }) => {
  try {
    const prescription = new Appointment({ date, doctorId, pacientId });
    return await prescription.save();
  } catch (e) {
    throw new Error(e);
  }
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  try {
    return await Appointment.findByIdAndUpdate(
      id,
      {
        date,
        doctorId,
        pacientId,
      },
      { new: true }
    );
  } catch (e) {
    throw new Error(e);
  }
};

const deleteAppointment = async (id) => {
  try {
    return await Appointment.findByIdAndUpdate(id);
  } catch (e) {
    throw new Error(e);
  }
};

const appointmentRepository = {
  getAllAppoitments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentRepository;
