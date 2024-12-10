<script setup>
import { onMounted } from "vue";
import { useAnimalStore } from "@/stores/animal";
import { useRoute } from "vue-router";

const route = useRoute();
const animalStore = useAnimalStore();

onMounted(async () => {
  const animalId = parseInt(route.params.id, 10);
  await animalStore.getAnimalById(animalId);
});
</script>

<template>
  <div v-if="animalStore.animalSelecionado" class="tudin">
    <div class="dogimg">
      <p class="infos">
        Nome: {{ animalStore.animalSelecionado.nome }} <br>
        Espécie: {{ animalStore.animalSelecionado.especie === 1 ? 'Cachorro' : 'Gato' }} <br>
        Idade: {{ animalStore.animalSelecionado.idade }} {{ animalStore.animalSelecionado.idade === 1 ? 'ano' : 'anos' }} <br>
        Sexo: {{ animalStore.animalSelecionado.sexo === 1 ? 'Macho' : 'Fêmea' }}
      </p>
      <img 
        :src="animalStore.animalSelecionado.foto?.url || '@/assets/default-animal.jpg'" 
        alt="Foto do animal" 
      />
    </div>
    <div class="btnconfirm">
      <p>Quero Esse</p>
    </div>
  </div>
  <div v-else>
    <p>Carregando informações do animal...</p>
  </div>
</template>


<style scoped>

.tudin {
    font-family: 'Kavoon';
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btnconfirm {
    background-color: #FAC105;
    width: 55%;
    text-align: center;
    margin: 3%;
    font-size: 70px;
    border-radius: 35px;
}

img {
    width: 70%;
    margin: 2%;
}

.dogimg {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}

.infos {
    margin: 3.5%;
}
</style>