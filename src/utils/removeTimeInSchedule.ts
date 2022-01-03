import { removeDuplicates } from './removeDuplicates';

export const removeTimeInSchedule = async (
  allTimes: string[],
  noAvailableTimes,
) => {
  let availableTimes = [];

  noAvailableTimes.forEach((noAvailableTime) => {
    return noAvailableTime.forEach((time) => {
      return time.forEach((time) => {
        availableTimes.push(time);

        return time;
      });
    });
  });

  availableTimes = removeDuplicates(availableTimes);

  availableTimes.forEach((time) => {
    const index = allTimes.indexOf(time);

    if (index > -1) {
      allTimes.splice(index, 1);
    }
  });

  return allTimes;
};
