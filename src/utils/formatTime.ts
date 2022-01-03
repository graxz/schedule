export const formatTime = (time: string) => {
  const initialDate = new Date(`January 5, 2022 ${time}`);

  const hour = initialDate.getHours();
  const minutes = initialDate.getMinutes();
  const formatedDate = new Date(`January 5, 2022 ${hour}:${minutes}`);

  return formatedDate;
};
