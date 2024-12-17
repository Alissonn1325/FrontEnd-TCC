<template>
    <div class="tudinho">
    <div class="titulo">
        <p>Pronto, agora que você escolheu seu animal, contate esses emails:</p   >
    </div>

    <div class="emails">
        <p>alissonfbrito01@gmail.com</p>
        <p>matheus10decarvalho@gmail.com</p>
        <p>theodoro.obenaus@gmail.com</p>
        <p>eduardorwodtkeifc@gmail.com</p>  
    </div>

</div>
</template>

<style scoped>



.titulo{
  text-decoration: none;
  font-family: 'Kavoon';
  color: black;
  font-size: 50px;
  text-align: center;
  background-color: #FAC105;
  border-radius: 50px; 
  padding: 3%;
}

.tudinho {
    display: flex;
    flex-direction: row;
    width: 75%;
    align-items: center;   
    margin: 10%; 
}

.emails{
  text-decoration: none;
  font-family: 'Kavoon';
  color: black;
  font-size: 20px;
  text-align: center;
  background-color: #FAC105;
  border-radius: 50px;
  padding: 5%;
  margin: 2%;
}

@media screen and (max-width: 600px) {
  .tudinho {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .titulo {
    font-size: 30px;
  }

  .emails {
        margin: 2%;
    font-size: 15px;
  }
}
</style>
