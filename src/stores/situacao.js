import { ref } from 'vue';
import { defineStore } from 'pinia';

import SituacaoService from '@/services/situacao';
const situacaoService = new SituacaoService();

export const useSituacaoStore = defineStore('situacao', () => {
  const situacoes = ref([]);

  async function getSituacao() {
    situacoes.value = await situacaoService.getSituacao();
  }

  return { situacoes, getSituacao };
});