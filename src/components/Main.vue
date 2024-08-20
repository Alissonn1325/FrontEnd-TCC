<script setup>

import MainPata from '@/components/MainPata.vue'

</script>

<template>

  <MainPata/>

  <div class="mains-glasses">
    <img src="@/assets/maindogfs.png" alt="" class="glasses">
    <div class="main-texto">
      <p>
        Adotar um animal de estimação, seja um cachorro ou um gato, vai muito além de simplesmente ter um companheiro peludo em casa. É um ato de amor e responsabilidade que traz inúmeros benefícios tanto para o animal quanto para o adotante.
      </p>
      </div>
  </div>

</template>

<style scoped>

.glasses {
  width: 100%;
}

.mains-glasses{
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.main-texto{
  display: flex;
  font-family: "Kavoon";
  position: absolute; 
    top: 50%; 
    left: 30%;
    transform: translate(-50%, -50%); 
    color: black; 
    font-size: 20px; 
    text-align: center;
    background-color: #FAC105;
    padding: 10px; 
    border-radius: 5px;
    height: 50%;
    width: 20%;
}

</style>