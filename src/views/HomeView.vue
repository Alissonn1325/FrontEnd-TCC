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
  <div class="main-pata">
    <div class="adote-hoje">
      <h1 class="adote">
        ADOTE HOJE
      </h1>
      <hr>
      <p>
        "Encontre amor em quatro patas: Furbuds, onde cada rabo abana uma história de adoção!"
      </p>
    </div>
    <div >
      <img src="@/assets/pata.png" alt="" class="pata">
    </div>
  </div>

  <div class="glasse">
    <img src="@/assets/maindogfs.png" alt="" class="glasses">
  </div>

  <div class="animals-container">
    <div 
        v-for="animal in animalStore.animais.slice(0, 3)" 
        :key="animal.id" 
        class="animals"
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

  <div class="more">
    <div class="ver">
      <RouterLink to="/Animals">
        <i/>
        Ver Mais
      </RouterLink>
    </div>
  </div>

</template>

<style scoped>  
.more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
}

.more a {
  text-decoration: none;
  font-family: 'Kavoon';
  color: black;
  font-size: 75px;
}

.ver {
  background-color: #FAC105;
  border-radius: 100px;
  padding: 1%;
  width: 35%;
  text-align: center;
}

.main-pata{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8rem;
  margin-top: 7.5rem;
  width: 100%;
}

.adote-hoje{
  background-color: #FAC105;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  padding: 15px;
  font-size: 30px;
  text-align: center;
  font-family: "Kavoon";
  width: 30%;
}

.adote{
  border: black solid 0px;
  border-bottom: black solid 5px;
  font-size: 70px;
}

.glasses{
  width: 100%;
}

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
  height: 400px;
}



@media screen and (max-width:1040px) {
  .adote {
    
  }

  .pata{
    width: 100%;
  }
}

@media screen and (max-width:600px) {

.ver {
  width: 100%;
  border-radius: 50px;
  padding: 0;
}

.more {
  margin-top: 10%;
}


.pata {
    width: 100%;
};

.glasses {
    width: 0;
}

.main-pata{
    flex-direction: column-reverse;
}

.adote-hoje{
    width: 70%;
}

}
</style>