import { ref } from 'vue';
import { defineStore } from 'pinia';
import AnimalService from '@/services/animal';

const animalService = new AnimalService();

export const useAnimalStore = defineStore('animal', () => {
  const animais = ref([]);
  const animalSelecionado = ref(null);
  const sexos = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function getAnimal() {
    loading.value = true;
    error.value = null;
    try {
      animais.value = await animalService.getAnimal();
    } catch (err) {
      error.value = 'Erro ao carregar lista de animais.';
      console.error(error.value, err);
    } finally {
      loading.value = false;
    }
  }

  async function getAnimalById(id) {
    loading.value = true;
    error.value = null;
    try {
      animalSelecionado.value = await animalService.getAnimalById(id);
    } catch (err) {
      error.value = `Erro ao carregar animal com ID ${id}.`;
      console.error(error.value, err);
    } finally {
      loading.value = false;
    }
  }

  async function getAnimalByRaca(racaId) {
    loading.value = true;
    error.value = null;
    try {
      animais.value = await animalService.getAnimalByRaca(racaId);
    } catch (err) {
      error.value = 'Erro ao carregar animais pela raça.';
      console.error(error.value, err);
    } finally {
      loading.value = false;
    }
  }

  async function createAnimal(animal) {
    loading.value = true;
    error.value = null;
    try {
      const novoAnimal = await animalService.createAnimal(animal);
      animais.value.push(novoAnimal);
      return novoAnimal;
    } catch (err) {
      error.value = 'Erro ao cadastrar o animal.';
      console.error(error.value, err);
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function getSexo() {
    loading.value = true;
    error.value = null;
    try {
      sexos.value = await animalService.getSexo();
    } catch (err) {
      error.value = 'Erro ao carregar lista de sexos.';
      console.error(error.value, err);
    } finally {
      loading.value = false;
    }
  }

  return {
    animais,
    animalSelecionado,
    sexos,
    loading,
    error,
    getAnimal,
    getAnimalById,
    getAnimalByRaca,
    createAnimal,
    getSexo,
  };
});

// import { ref } from 'vue';
// import { defineStore } from 'pinia';
// import AnimalService from '@/services/animal';

// const animalService = new AnimalService();

// export const useAnimalStore = defineStore('animal', () => {
//   const animais = ref([]);
//   const animalSelecionado = ref(null);

//   async function getAnimal() {
//     animais.value = await animalService.getAnimal();
//   }

//   async function getAnimalById(id) {
//     try {
//       const animal = await animalService.getAnimalById(id);
//       animalSelecionado.value = animal;
//     } catch (error) {
//       console.error("Erro ao carregar o animal:", error);
//       animalSelecionado.value = null;
//     }
//   }


//   return { animais, animalSelecionado, getAnimal, getAnimalById };
// });
