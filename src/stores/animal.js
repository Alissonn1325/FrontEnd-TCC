import { ref } from 'vue';
import { defineStore } from 'pinia';
import AnimalService from '@/services/animal';

const animalService = new AnimalService();

export const useAnimalStore = defineStore('animal', () => {
  const animais = ref([]);
  const animalSelecionado = ref(null);

  async function getAnimal() {
    animais.value = await animalService.getAnimal();
  }

  async function getAnimalById(id) {
    try {
      const animal = await animalService.getAnimalById(id);
      animalSelecionado.value = animal;
    } catch (error) {
      console.error("Erro ao carregar o animal:", error);
      animalSelecionado.value = null;
    }
  }

  return { animais, animalSelecionado, getAnimal, getAnimalById };
});
