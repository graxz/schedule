import axios from 'axios';

export const professionalsProvider = async (): Promise<any> => {
  try {
    const employees = await axios.get(
      'https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employees',
    );

    return employees.data;
  } catch (error) {
    throw new Error(error);
  }
};
