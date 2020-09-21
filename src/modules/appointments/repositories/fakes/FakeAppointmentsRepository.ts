import { v4 } from 'uuid';
import { isEqual } from 'date-fns';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

import IAppointimentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

class AppointmentsRepository implements IAppointimentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const appointment = this.appointments.find(appoint =>
      isEqual(appoint.date, date),
    );

    return appointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    appointment.id = v4();
    appointment.date = date;
    appointment.provider_id = provider_id;

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
