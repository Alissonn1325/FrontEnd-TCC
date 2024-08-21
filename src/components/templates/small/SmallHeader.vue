<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';

import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>

<template>
    <LogoTitle/>
    <div class="hamburger" @click="showMenu = !showMenu">
      <i class="mdi mdi-menu menu" />
    </div>
    <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
      <p class="hamburger" @click="showMenu = !showMenu">
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
</template>

<style scoped>

.hamburger {
  font-size: 1.5rem;
  padding: 1rem;
  padding-bottom: 1rem;
  align-items: center;
}

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

    text-align: end;
    font-size: 1rem;
    font-family: 'Kavoon';
}

#footerMenu a{
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    color: black;
}

.icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.7rem;
}
</style>