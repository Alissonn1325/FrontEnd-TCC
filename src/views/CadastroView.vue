<script setup>

</script>

<template>

<div class="register">
    <div class="infos">
        <p>
            bomba
        </p>
        <p>
            bomba 2
        </p>
        <p>
            bomba 3
        </p>
    </div>
    
        <button class="record">
            Registrar
        </button>

</div>
    
</template>

<style scoped>

.register {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.infos {
    background-color: #FAC105;
    padding: 1.34%;
    border-radius: 40px;
    font-size: 35px;
    font-family: 'Kavoon';
    width: 70%;
}

.record {
    background-color: #FAC105;
    border: #FAC105;
    border-radius: 20%;
    margin-top: 2%;
    padding: 0.5%;
    font-size: 25px;
    font-family: 'Kavoon';
}


@media screen and (max-width: 600px) {
    .register {
        margin-top: 5%;
        width: 90%;
    }

    .record {
        margin-top: 5%;
    }
}
</style>