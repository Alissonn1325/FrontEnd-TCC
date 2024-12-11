<script setup>
import AnimalsInfo from '@/components/AnimalInfo.vue'

</script>

<template>
    <div class="titulo">
        <div class="title">Conheça os Peludos</div>
    </div>
  <div class="infos">
    <AnimalsInfo />
  </div>
</template>

<style scoped>

.titulo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3%;
    padding: 1%;
}

.title{
  text-decoration: none;
  font-family: 'Kavoon';
  color: black;
  font-size: 50px;
  text-align: center;
  background-color: #FAC105;
  border-radius: 50px;
  width: 30%;
}

.infos {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media screen and (max-width: 600px) {
  .infos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .title {
    font-size: 40px;
    width: 75%;
  }
}
</style>
