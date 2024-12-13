import axios from 'axios'

const API_URL = 'http://0.0.0.0:19003/api/usuarios/'

export async function login(email, password) {
  const response = await axios.get(API_URL, {
    email,
    password,
  })
  return response.data
}

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('psg_auth_token', token)
    localStorage.setItem('psg_auth_token2', token)
  } else {
    delete localStorage.delItem('psg_auth_token')
  }
}