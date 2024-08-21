<script setup></script>
<template>
  <div class="links">
    <RouterLink to="/">Help</RouterLink>
    <RouterLink to="/">Contact Us</RouterLink>
    <RouterLink to="/">Privacy & Terms</RouterLink>
  </div>
  <div class="icons">
    <i class="mdi mdi-instagram icone"/> 
    <p>
      @furbudsofc
    </p>
    <i class="mdi mdi-github icone"/>
    <p>
      FurBuds
    </p>
  </div>
</template>
<style scoped>
.links {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 6rem;
  font-size: 1.5rem;
  color: black;
}

.links a {
  text-decoration: none;
}

.icons {
  padding-right: 3rem;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
}

.icone {
  font-size: 3.2rem;
}
</style>