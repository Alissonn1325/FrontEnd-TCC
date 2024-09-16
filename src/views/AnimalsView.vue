<script setup>
import AnimalsInfo from '@/components/AnimalInfo.vue'
</script>

<template>

    <div class="infos">
        
        <AnimalsInfo/>
        <AnimalsInfo/>
        <AnimalsInfo/>
        <AnimalsInfo/>
        
        <AnimalsInfo/>
        <AnimalsInfo/>
        <AnimalsInfo/>
        <AnimalsInfo/>
        
    </div>

</template>

<style scoped>

.infos {
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

@media screen and (max-width: 600px) {
    .infos {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}

</style>