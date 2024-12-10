<script setup>
import { onMounted } from "vue";
import { useAnimalStore } from "@/stores/animal";

const animalStore = useAnimalStore();

onMounted(() => {
  animalStore.getAnimal();
});

function formatIdade(idade) {
  return idade <= 1 ? `${idade} ano` : `${idade} anos`;
}

function formatEspecie(especie) {
  if (especie === 1) return "Cachorro";
  if (especie === 2) return "Gato";
  return "Desconhecida";
}

</script>

<template>
  <div class="animals-container">
    <div 
      v-for="animal in animalStore.animais" 
      :key="animal.id" 
      >
    <RouterLink :to="`/Animal/${animal.id}`" class="link">
      <div>
        <img 
        :src="animal.foto?.url || '@/assets/default-animal.jpg'" 
      alt="Foto do animal" 
      class="animals-img" 
      />
    </div>
    <div class="animals-info">
      <p>
        Nome: {{ animal.nome }} <br />
        Espécie: {{ formatEspecie(animal.especie) }} <br />
        Idade: {{ formatIdade(animal.idade) }}
      </p>
    </div>
  </RouterLink>
    </div>
  </div>
</template>

<style scoped>

.link{
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

.animals-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.animals-info {
  font-family: "kavoon";
  text-align: center;
  border: black solid 5px;
  border-radius: 50px;
  width: 350px;
}

.animals-img {
  border: #FAC105 solid 5px;
  border-radius: 30px;
  width: 400px;
}
</style>
