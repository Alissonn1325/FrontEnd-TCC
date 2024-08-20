<script setup></script>

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
    <div class="pata">
      <img src="@/assets/pata.png" alt="">
    </div>
  </div>
</template>

<style scoped>

.main-pata{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8rem;
  margin-top: 3rem;
}

.adote-hoje{
  background-color: #FAC105;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  padding: 15px;
  font-size: 40px;
  text-align: center;
  font-family: "Kavoon";
  width: 40%;
}

.adote{
  border: black solid 0px;
  border-bottom: black solid 5px;
  font-size: 100px;
}

</style>