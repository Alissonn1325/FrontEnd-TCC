<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '@/services/auth';

const router = useRouter();

const nome = ref('');
const email = ref('');
const senha = ref('');
const loading = ref(false);

async function handleRegister() {
  loading.value = true;
  try {
    const userData = {
      name: nome.value, // Corrigi para "name" (backend espera essa chave)
      email: email.value,
      password: senha.value,
    };

    await registerUser(userData.name, userData.email, userData.password); // Alinhado com o backend
    alert('Cadastro realizado com sucesso!');
    router.push('/login');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.response?.data || error);
    alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
  } finally {
    loading.value = false;
  }
}
</script>


<template>
  <div id="container">
    <div class="register">
      <h1>Cadastro</h1>
      <div class="box">
        <span class="mdi mdi-account-circle"></span>
        <input
          type="text"
          class="form-control"
          placeholder="Nome"
          v-model="nome"
          required
        />
      </div>
      <div class="box">
        <span class="mdi mdi-email"></span>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
          required
        />
      </div>
      <div class="box">
        <span class="mdi mdi-lock"></span>
        <input
          type="password"
          class="form-control"
          placeholder="Senha"
          v-model="senha"
          required
        />
      </div>
      <div class="buttons">
        <router-link to="/login" class="botao">Voltar</router-link>
        <button class="botao" @click="handleRegister" :disabled="loading">
          {{ loading ? 'Carregando...' : 'Cadastrar' }}
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

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fac105;
  width: 50vh;
  height: 50vh;
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
</style>
