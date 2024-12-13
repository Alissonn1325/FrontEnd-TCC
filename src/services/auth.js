import axios from 'axios'

const API_URL = 'http://0.0.0.0:19003/token/'

export async function login(email, password) {
  const response = await axios.post(API_URL, {
    email,
    password,
  })
  return response.data
}

export async function registerUser(userData) {
  const response = await axios.post(API_URL, userData);
  return response.data;
}

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('authToken', token)
  } else {
    delete localStorage.delItem('psg_auth_token')
  }
}