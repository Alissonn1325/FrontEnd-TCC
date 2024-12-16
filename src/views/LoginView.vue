<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login, setAuthToken } from '@/services/auth';

const router = useRouter();

const username = ref('');
const password = ref('');
const loading = ref(false);

async function handleLogin() {
  loading.value = true;
  try {
    const response = await login(username.value, password.value);
    setAuthToken(response.access);
    alert('Login realizado com sucesso!');
    console.log('Token JWT:', response.access);
    router.push('/');
  } catch (error) {
    alert('Erro ao fazer login. Verifique suas credenciais.');
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div id="container">
    <div class="login">
      <h1>Login</h1>
      <div class="box">
        <span class="mdi mdi-account-circle"></span>
        <input type="text" class="form-control" placeholder="Email" v-model="username" required />
      </div>
      <div class="box">
        <span class="mdi mdi-account-key"></span>
        <input type="password" class="form-control" placeholder="Senha" v-model="password" required />
      </div>
      <div class="buttons">
        <router-link to="cadastro" class="botao">Cadastrar</router-link>
        <button class="botao" @click="handleLogin" :disabled="loading">
          {{ loading ? 'Carregando...' : 'Logar' }}
        </button>
        </div>
        </div>
  </div>
</template>
<style scoped>
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  font-family: 'Kavoon';
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fac105;
  width: 50vh;
  height: 40vh;
  border-radius: 3vh;
  margin-top: 5%;
}

button {
  border: none;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
}

.botao {
  background: none;
  width: 13vh;
  height: 4vh;
  font-size: 2.5vh;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: black;
  font-family: 'Kavoon';
}

h1 {
  font-size: 55px;
  color: rgb(0, 0, 0);
  margin-top: 20px;
}

.box {
  display: flex;
  align-items: center;
  margin: 2vh;
  width: 40vh;
}

.box span {
  font-size: 3vh;
  margin-right: 1vh;
  color: rgb(0, 0, 0);
}

.box input {
  background: none;
  border: none;
  border-bottom: 2px solid rgb(0, 0, 0);
  height: 4vh;
  font-size: 2.5vh;
  color: rgb(0, 0, 0);
  width: 100%;
  padding: 0 1vh;
}

.box input::placeholder {
  color: rgb(0, 0, 0);
}

@media screen and (max-width:600px) {
  .login {
    margin-right: 10%;
    margin-left: 10%;
  }
}
</style>
