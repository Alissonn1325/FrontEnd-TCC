<script setup>

import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
  <div class="header">
    <div class="furbuds">
      <h1>
        FurBuds
      </h1>
    </div>
    <div class="logo">
      <img src="@/assets/logo.png" alt="FurBuds Logo">
    </div>
    <div class="hamburger" @click="showMenu = !showMenu">
      <i class="mdi mdi-menu menu" />
    </div>
    <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
      <p class="hamburger" @click="showMenu = !showMenu">
        X
      </p>
      <RouterLink to="/">
        <i/>
        INICIO
      </RouterLink>
      <RouterLink to="/login">
        <i/>
        LOGIN
      </RouterLink>
      <RouterLink to="/Animals">
        <i/>
        QUERO ADOTAR
      </RouterLink>
      <RouterLink to="/Register">
        <i/>
        CADASTRAR ANIMAL
      </RouterLink>
    <div class="dogmenu">
      <img src="@/assets/dogmenu.png" alt="">
    </div>
  </div>
  </div>
</template>

<style scoped>

#footerMenu {
    position: fixed;
    top: 0;
    width: 15%;
    right: 0;

    width: 36%;
    border-top: #F2782C 1px solid;
    border-radius: 0px 0px 0px 30px;
    background-color: #F2782C;

    display: block;
    padding: 1rem;
    padding-right: 4rem;

    text-align: end;
    font-size: 1.6rem;
    font-family: 'Kavoon';

}

#footerMenu a{
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    color: black;
}

.dogmenu {
  display: flex ;
  justify-content: center;
}

.hamburger:hover {
    cursor: pointer;
}

.menu {
  font-size: 3.4rem;
  margin-right: 1.2rem;
  width: 100px;
}

img {
  height: 80px;
}

.furbuds{
  font-size: 1.7rem;
  margin-left: 1.2rem;
  width: 100px;
  font-family: "Kavoon", serif;
}

.header{
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  top: 0;
  background-color: #FAC105;
}

.logo{
  width: 100px;
}

</style>