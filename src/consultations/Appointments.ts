import axios from 'axios';

export const appointmentsProvider = async (
  employeeId: number,
): Promise<any> => {
  try {
    const appointments = await axios.get(
      `https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employee/${employeeId}/appointments`,
    );

    return appointments.data;
  } catch (error) {
    throw new Error(error);
  }
};
