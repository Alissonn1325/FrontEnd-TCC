<script setup>
  import LargeHeader from '@/components/templates/large/LargeHeader.vue';
  import LargeFooter from '@/components/templates/large/LargeFooter.vue';
</script>
<template>
  <div id="layout-large">
    <header>
      <large-header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <large-footer />
    </footer>
  </div>
</template>
<style scoped>
#layout-large {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  min-height: 100vh;
}

header {
  display: flex;
  widows: 100vw;
  justify-content: space-evenly;
  grid-area: header;
  background-color: #FAC105;
  width: 100%;
}

main {
  min-height: 80%;
  padding: 2rem 0 2rem 0;
  grid-area: main;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  background-color: #FAC105;
  grid-area: footer;
}
</style>