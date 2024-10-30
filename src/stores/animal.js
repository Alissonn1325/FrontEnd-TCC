import { ref } from 'vue';
import { defineStore } from 'pinia';

import AnimalService from '@/services/animal';
const animalService = new AnimalService();

export const useAnimalStore = defineStore('animal', () => {
  const animais = ref([]);

  async function getAnimal() {
    animais.value = await animalService.getAnimal();
  }

  async function getAnimalByRaca(raca_id) {
    animais.value = await animalService.getAnimalByRaca(raca_id);
  }

  async function createAnimal(animal) {
    await animalService.createAnimal(animal);
    getAnimal();
  }

  return { animais, createAnimal, getAnimal, getAnimalByRaca };
});