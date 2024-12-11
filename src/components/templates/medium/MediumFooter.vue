<script setup></script>
<template>
  <div class="all">
    <div class="links">
      <a href="https://ifc.edu.br/">Nosso IFC</a>
      <a href="https://vale.com/pt/adocao-de-animais">Site de Inspiração</a>
      <a href="https://ceua.ifc.edu.br/">Ética de Uso de Animais</a>
    </div>
  <div class="icons">
    <i class="mdi mdi-instagram icone"/> 
    <a href="https://www.instagram.com/fur_buds/">
      @Furbuds
    </a>
    <i class="mdi mdi-github icone"/>
    <a href="https://github.com/Alissonn1325/TCC_Furbuds">
      FurBuds
    </a>
  </div>
</div>
</template>
<style scoped>

.all {
  display: flex;
  justify-content: space-between
}
.links {
  display: flex;
  width: 50%;
  gap: 5rem;
  font-size: 2rem;
  font-family: 'Kavoon';
}

.links a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  text-shadow: #795e00 0.1em 0.1em 0.2em
}

.icons {
  padding-right: 3rem;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 1rem;
  font-size: 30px;
  font-family: 'Kavoon';
}

.icons a {
  text-decoration: none;
  color: #000;
  text-shadow: #795e00 0.1em 0.1em 0.2em
}
</style>