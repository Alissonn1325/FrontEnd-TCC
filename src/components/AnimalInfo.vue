<script setup>
</script>

<template>

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
  margin-top: 5%;
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