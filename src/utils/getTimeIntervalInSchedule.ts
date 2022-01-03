import { formatTime } from './formatTime';

export const getTimeIntervalInSchedule = (start: string, end: string) => {
  const notAvailableTimes = [];
  const timeStart = formatTime(start);
  const timeEnd = formatTime(end);

  for (let index = 0; timeStart <= timeEnd; index++) {
    notAvailableTimes.push(`${timeStart.getHours()}:${timeStart.getMinutes()}`);

    if (timeEnd.getMinutes() == 20) {
      notAvailableTimes.push(`${timeEnd.getHours()}:30`);
    }

    timeStart.setMinutes(timeStart.getMinutes() + 30);
  }

  return notAvailableTimes;
};
