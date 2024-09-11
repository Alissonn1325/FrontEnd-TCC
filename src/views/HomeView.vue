<script setup>
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

  <div class="animals">
    <div>
    <img src="@/assets/chottin.jpeg" alt="" class="animals-img">
    </div>
    <div class="animals-info">
      <p>
        rafa <br>
        chorro <br>
        medio
      </p>
    </div>
  </div>

</template>

<style scoped>

.animals{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.animals-info {
  font-family: "kavoon";
  text-align: center;
  border: black solid 5px;
  border-radius: 50px;
  width: 300px;
}

.animals-img {
  border: #FAC105 solid 5px;
  border-radius: 30px;
  width: 300px;
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