<script setup></script>
<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="FurBuds Logo" />
    <h2>FurBuds</h2>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  padding-left: 3rem;
  gap: 1rem;
  align-items: center;
}

.logo img {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
}

.logo h2 {
  font-family: 'Belleza', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>