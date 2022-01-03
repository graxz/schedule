import { Injectable } from '@nestjs/common';
import { appointmentsProvider } from './consultations/Appointments';
import { professionalsProvider } from './consultations/Professionals';
import { availableTimes } from './utils/availableTimes';

@Injectable()
export class AppService {
  async getAvailableTimes(): Promise<string> {
    return this.createAvailableTimes();
  }

  async getProfessionals(): Promise<any> {
    return await professionalsProvider();
  }

  async getApointments(employeeId: number): Promise<any> {
    return await appointmentsProvider(employeeId);
  }

  async createAvailableTimes(): Promise<any> {
    return availableTimes();
  }
}
