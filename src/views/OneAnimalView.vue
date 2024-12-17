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
        Raça: {{ animalStore.animalSelecionado.raca?.raca  }} <br>
        Idade: {{ animalStore.animalSelecionado.idade }} {{ animalStore.animalSelecionado.idade === 1 ? 'ano' : 'anos'
        }} <br>
        Sexo: {{ animalStore.animalSelecionado.sexo === 1 ? 'Macho' : 'Fêmea' }} <br>
        Descrição: {{ animalStore.animalSelecionado.descricao }}
      </p>
      <img :src="animalStore.animalSelecionado.foto?.url || '@/assets/default-animal.jpg'" alt="Foto do animal" />
    </div>
    <div class="btnconfirm">
      <router-link to="/adocao" class="btnconfirm">
        <p>Quero Esse</p>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Carregando informações do animal...</p>
  </div>
</template>


<style scoped>
.tudin {
  font-family: 'Kavoon', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.dogimg {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  text-align: left;
}

.infos {
  flex: 1;
  font-size: 20px;
  line-height: 1.6;
  color: #333;
  margin-right: 10px;
}

img {
  flex: 1;
  max-width: 400px;
  width: 100%;
  aspect-ratio: 1;
  border: 5px solid #FAC105;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.btnconfirm {
  background-color: #FAC105;
  color: black;
  font-weight: bold;
  width: 300px;
  text-align: center;
  margin-top: 100px;
  padding: 15px;
  font-size: 24px;
  border-radius: 35px;
  cursor: pointer;
  text-decoration: none;
}


.btnconfirm p {
  margin: 0;
}


@media (max-width: 1040px) {
  .dogimg {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .infos {
    margin-right: 0;
    margin-bottom: 15px;
    font-size: 18px;
  }

  img {
    max-width: 300px;
  }

  .btnconfirm {
    width: 80%;
    font-size: 22px;
  }
}

@media (max-width: 600px) {
  .dogimg {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .infos {
    font-size: 16px;
    margin-right: 0;
    margin-bottom: 10px;
  }

  img {
    max-width: 250px;
  }

  .btnconfirm {
    width: 90%;
    font-size: 20px;
    padding: 10px;
  }
}
</style>
