<script setup>
import AnimalInfo from "@/components/AnimalInfo.vue"
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

  <AnimalInfo/>

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

@media screen and (max-width:600px) {

.ver {
  width: 80%;
  border-radius: 50px;
}

.more a {
  font-size: 50px;
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