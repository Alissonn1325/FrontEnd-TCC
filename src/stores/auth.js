import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login, setAuthToken } from '@/services/auth'; // Import corrigido
import { registerUser as registerService } from '@/services/auth';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(null);
  const refreshToken = ref(null);
  const user = ref(null);

  async function loginUser(email, password) {
    try {
      const { access, refresh } = await login(email, password);
      accessToken.value = access;
      refreshToken.value = refresh;
      setAuthToken(access);
    } catch (error) {
      console.error('Erro ao fazer login:', error.response?.data || error);
      throw new Error('Falha no login. Verifique suas credenciais.');
    }
  }

  async function registerUser(name, email, password) {
    try {
      const { access, refresh } = await registerService(name, email, password); // Removi o contact
      accessToken.value = access;
      refreshToken.value = refresh;
      setAuthToken(access);
    } catch (error) {
      console.error('Erro ao fazer registro:', error.response?.data || error);
      throw new Error('Falha no registro. Verifique suas credenciais.');
    }
  }

  function logoutUser() {
    accessToken.value = null;
    refreshToken.value = null;
    setAuthToken(null);
  }

  return {
    accessToken,
    refreshToken,
    user,
    loginUser,
    logoutUser,
    registerUser,
  };
});
