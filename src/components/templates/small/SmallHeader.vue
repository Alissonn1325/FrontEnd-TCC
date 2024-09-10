<script setup>

import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
  <div class="cabeca">
      <div>
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="hamburger" @click="showMenu = !showMenu" >
        <i class="mdi mdi-menu menu" />
      </div>
    <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
      <p class="hamburger close" @click="showMenu = !showMenu">
        X
      </p>
      <RouterLink to="/login">
        <i/>
        LOGIN
      </RouterLink>
      <RouterLink to="/">
        <i/>
        HOME
      </RouterLink>
    </div>
  </div>
  </template>

<style scoped>

.cabecalo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.cabeca {
  font-family: 'Kavoon';
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 10%;
}

.menu {
  font-size: 1.9rem;
}

.close {
  padding: 1rem;
}

#footerMenu {
    position: fixed;
    top: 0;
    right: 0;

    width: 100%;
    border-top: #F2782C 1px solid;
    border-radius: 0px 0px 30px 30px;
    background-color: #F2782C;

    display: block;
    padding: 1rem;

    text-align: end;
    font-size: 1.5rem;
    font-family: 'Kavoon';
}

#footerMenu a{
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    color: black;
}

</style>