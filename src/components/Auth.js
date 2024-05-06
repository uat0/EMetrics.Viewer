import axios from 'axios';

const API_URL = 'http:/26.21.184.116:8081';

class AuthService {
  async loginuser(credentials) {
    const response = await axios.post(`${API_URL}/login`, credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  }

  async logout() {
    localStorage.removeItem('token');
  }

  async getProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Пользователь не найден');
    }
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
}

export default new AuthService();