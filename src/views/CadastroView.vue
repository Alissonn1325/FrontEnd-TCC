<script setup>
import { onMounted, reactive, ref } from 'vue';

import AddRaca from '@/components/ModalAddRaca.vue'
import { useRacaStore } from '@/stores/racas';
import { useAnimalStore } from '@/stores/animal';
import { useUploaderStore } from '@/stores/uploader';
import ModalAddRaca from '@/components/ModalAddRaca.vue';

const racaStore = useRacaStore();
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
    raca: ''
  });
}

onMounted(async () => {
  await racaStore.getRaca();
});
</script>

<template>
        <h1>Adicionar Animal</h1>
        <form class="form" @submit.prevent="save">
            <div class="row-form">
                <label for="title">Nome</label>
                <input type="text" id="title" v-model="animal.nome" />
            </div>
            <div class="row-form">
                <label for="description">Idade</label>
                <input type="number" id="description" v-model="animal.idade" />
            </div>
            <div class="row-form">
                <label for="raca">Raça</label>
                <div class="row ">
                    <select id="raca" v-model="animal.raca">
                        <option value="" disabled>Selecione uma Raça</option>
                        <option
                        v-for="raca in racaStore.racas"
                        :key="raca.id"
                        :value="raca.id"
                        >
                        {{ raca.raca }}
                    </option>
                </select>
                <button class="btn-icon" @click="showModal = !showModal">+</button>
            </div>
        </div>
        <button class="btn-send" type="submit">Adicionar</button>
    </form>
    
    
    <ModalAddRaca v-if="showModal" @close="showModal = !showModal" />

</template>

<style scoped>

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
}

.form button.btn-send {
  background-color: #FAC105;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  width: 200px;
}

.form button.btn-icon {
  background-color: #FAC105;
  color: black;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
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