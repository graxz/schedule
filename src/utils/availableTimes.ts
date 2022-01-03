import { appointmentsProvider } from '../consultations/Appointments';
import { professionalsProvider } from '../consultations/Professionals';
import { allTimes } from './allTimes';
import { getTimeIntervalInSchedule } from './getTimeIntervalInSchedule';
import { removeTimeInSchedule } from './removeTimeInSchedule';

export const availableTimes = async () => {
  const times = allTimes();

  const { employees } = await professionalsProvider();

  const noAvailableTimesArr = await Promise.all(
    await employees.map(async (professional: { id: number }) => {
      const { appointments } = await appointmentsProvider(professional.id);

      return appointments.map((appointment) => {
        const { startsAt, finishesAt } = appointment;

        const noTimes = getTimeIntervalInSchedule(startsAt, finishesAt);

        return noTimes;
      });
    }),
  );

  const availableTimes = await removeTimeInSchedule(times, noAvailableTimesArr);

  return {
    availableTimes,
  };
};
