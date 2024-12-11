<script setup>
  import MediumHeader from '@/components/templates/medium/MediumHeader.vue';
    import MediumFooter from '@/components/templates/medium/MediumFooter.vue';
</script>

<template>
  <div id="layout-medium">
    <header>
      <medium-header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <medium-footer />
    </footer>
  </div>
</template>
<style scoped>
#layout-medium {
  display: flex;
  flex-direction: column;
}

header {
  position: static;
  background-color: #FAC105;
  width: 100%;
}

main {
  padding-top: 20%;
  width: 100%;

}

footer {
  background-color: #FAC105;
  width: 100%;
}
</style>