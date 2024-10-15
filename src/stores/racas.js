import { ref } from 'vue';
import { defineStore } from 'pinia';

import RacaService from '@/services/racas';
const racaService = new RacaService();

export const useRacaStore = defineStore('raca', () => {
  const racas = ref([]);

  async function getRaca() {
    racas.value = await racaService.getRaca();
  }

  async function createRacas(raca) {
    await racaService.createRacas(raca);
    getRaca();
  }

  return { racas, getRaca, createRacas };
});