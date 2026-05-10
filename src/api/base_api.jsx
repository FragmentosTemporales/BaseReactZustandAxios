import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const createContact = async (payload) => {
  try {
    const url = `${baseUrl}/POST/contact_message`;
    console.log('Enviando solicitud a:', url);
    const response = await axios.post(`${url}`, payload);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};
