<script setup>
import { onMounted, reactive, ref } from 'vue';

import AddRaca from '@/components/ModalAddRaca.vue'
import { useRacaStore } from '@/stores/racas';
import { useAnimalStore } from '@/stores/animal';
import { useUploaderStore } from '@/stores/uploader';
import { useSituacaoStore } from '@/stores/situacao';
import ModalAddRaca from '@/components/ModalAddRaca.vue';

const racaStore = useRacaStore();
const situacaoStore = useSituacaoStore();
const animalStore = useAnimalStore();
const uploaderStore = useUploaderStore();

const showModal = ref(false);

const file = ref(null);
const previewImage = ref('');

const animal = reactive({
  nome: '',
  idade: '',
  sexo: '',
  status: '',
  especie: '',
  situacao: '',
  image_attachment_key: '',
  raca: ''
});

const uploadImage = (e) => {
  file.value = e.target.files[0];
  previewImage.value = URL.createObjectURL(e.target.files[0]);
};

async function save() {
  await animalStore.createAnimal(animal);
  Object.assign(animal, {
    nome: '',
    idade: '',
    sexo: '',
    status: '',
    especie: '',
    situacao: '',
    image_attachment_key: '',
    raca: ''
  });
}

onMounted(async () => {
  await racaStore.getRaca();
});
</script>

<template>
  <div class="formulario">  
    <h1>Cadastrar Animal</h1>
    <form class="form" @submit.prevent="save">
      <div class="itens">
        <div class="row-form">
          <label for="title">Nome</label>
          <input type="text" id="title" v-model="animal.nome" />
        </div>
        <div class="row-form">
          <label for="description">Idade</label>
          <input type="number" id="description" v-model="animal.idade" />
        </div>
        <div class="row-form">
          <label for="description">Situação</label>
          <select id="situacao
          " v-model="animal.situacao">
          <option value="" disabled>Selecione a Situação</option>
          <option v-for="situacao in situacaoStore.situacao" :key="situacao.id" :value="situacao.id">
            {{ situcao.situcao }}
          </option>
        </select>
      </div>
      <div class="row-form">
        <label for="description">Sexo</label>
        <select v-model="animal.sexo">
        <option :value="1">Macho</option>
        <option :value="2">Fêmea</option>
      </select>
    </div>
    <div class="row-form">
      <label for="description">Especie</label>
      <select v-model="animal.especie">
        <option :value="1">Cachorro</option>
        <option :value="2">Gato</option>
      </select>
    </div>
    <div class="row-form">
      <label for="image">Imagem</label>
      <div class="row">
        <input type="file" id="foto" @change="uploadImage" />
        <img
        v-if="previewImage"
        :src="previewImage"
        class="previewImage"
        alt="preview"
        />
        </div>
      </div>
      <div class="row-form">
        <label for="raca">Raça</label>
        <div class="row ">
          <select id="raca" v-model="animal.raca">
            <option value="" disabled>Selecione uma Raça</option>
            <option v-for="raca in racaStore.racas" :key="raca.id" :value="raca.id">
              {{ raca.raca }}
            </option>
          </select>
          <button class="btn-icon" @click="showModal = !showModal">Add Raça</button>
        </div>
      </div>
    </div>
      <button class="btn-send" type="submit">Cadastrar</button>
    </form>
    
    
    <ModalAddRaca v-if="showModal" @close="showModal = !showModal" />
    
  </div>
  </template>

<style scoped>

input, option, select, img{
  font-family: 'Kavoon';
}

.itens {
  background-color: #FAC105;
  border-radius: 70px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
}

.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  font-family: 'Kavoon';
  font-size: large;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 2rem;
  align-items: center;
}

.row-form {
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  max-width: 400px;
  padding-top: 30px;
}

.form button.btn-send {
  background-color: #FAC105;
  color: black;
  border: none;
  border-radius: 70px;
  padding: 1rem;
  font-size: larger;
  cursor: pointer;
  width: 200px;
  font-family: 'Kavoon';
}

.form button.btn-icon {
  color: black;
  border: none;
  margin-left: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Kavoon';
  border-radius: 70px;
}

.previewImage {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #FAC105;
  padding: 0.1rem;
}
</style>