export const allTimes = () => {
  const availableTimes = [];
  const dateExample = new Date('January 5, 2022 08:00:00');

  for (let index = 0; index < 21; index++) {
    const hour = dateExample.getHours();
    const minutes = dateExample.getMinutes();

    availableTimes.push(`${hour}:${minutes}`);

    dateExample.setMinutes(minutes + 30);
  }

  return availableTimes;
};
