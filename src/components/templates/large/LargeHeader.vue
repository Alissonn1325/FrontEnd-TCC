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
  </div>
</template>

<style scoped>
.icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.7rem;
}

.hamburger:hover {
    cursor: pointer;
}

.menu {
  font-size: 4rem;
  margin-right: 1.2rem;
  width: 100px;
}

img {
  height: 100px;
}

.furbuds{
  font-size: 2rem;
  margin-left: 1.2rem;
  width: 100px;
  font-family: "Kavoon", serif;
}

.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.logo{
  width: 100px;
}

</style>