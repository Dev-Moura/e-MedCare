import { AppointmentRepository } from "../repository/AppointmentRepository";

const getAllAppointments = async () => {
  return AppointmentRepository.getAllAppointments();
};

const getAppointment = async (id) => {
  return AppointmentRepository.getAppointment(id);
};

const saveAppointment = async ({ date, doctorId, pacientId }) => {
  return AppointmentRepository.saveAppointment({ date, doctorId, pacientId });
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  return AppointmentRepository.updateAppointment(id, {
    date,
    doctorId,
    pacientId,
  });
};

const deleteAppointment = async (id) => {
  return appointmentService.deleteAppointment(id);
};

const appointmentService = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentService;
