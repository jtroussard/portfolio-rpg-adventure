import axios from 'axios';

const API_URL = 'http://localhost:5000/api/linkedin';

export const fetchLinkedInProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`);
  return response.data;
};
