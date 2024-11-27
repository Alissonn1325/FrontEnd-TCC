<script setup>
</script>

<template>
    <div class="tudin">
        <div class="dogimg">
            <p class="infos">
                balls
            </p>
            <img src="@/assets/chottin.jpeg" alt="">
        </div>
        
        <div class="btnconfirm">
            <p>
                Quero Esse
            </p>
        </div>
    </div>
</template>

<style scoped>

.tudin {
    font-family: 'Kavoon';
}

.btnconfirm {
    background-color: #FAC105;
    width: 75%;
    text-align: center;
    margin: 3%;
}

img {
    width: 50%;
}

.dogimg {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}

.infos {
    margin: 3.5%;
    width: 50%;
}
</style>