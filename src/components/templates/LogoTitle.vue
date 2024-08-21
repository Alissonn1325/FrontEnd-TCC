<script setup></script>
<template>
  <div class="logo">
    <h2>FurBuds</h2>
    <img src="@/assets/logo.png" alt="FurBuds Logo" />
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
  font-family: 'Kavoon', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>