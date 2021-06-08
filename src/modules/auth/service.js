import axios from 'axios';
import { API_URL } from 'src/constants';

class AuthService {
  login = async (data) => {
    return await axios.post(`${API_URL}/login`, data);
  };
  register = async (data) => {
    return await axios.post(`${API_URL}/register`, data);
  };
}

export default new AuthService();
