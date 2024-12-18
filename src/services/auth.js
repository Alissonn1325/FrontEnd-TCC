import axios from 'axios';

const API_URL = 'https://backend-tcc-hb0p.onrender.com/token/';
const API_URL2 = 'https://backend-tcc-hb0p.onrender.com/api/register/';

export async function login(email, password) {
  const response = await axios.post(API_URL, {
    email,
    password,
  });
  return response.data;
}

export async function registerUser(name, email, password) {
  const response = await axios.post(API_URL2, {
    name,
    email,
    password,
  });
  return response.data;
}

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
}
