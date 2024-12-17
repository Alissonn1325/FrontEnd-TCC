<template>
  <div class="tudinho">
    <div class="infos">
      <div class="titulo">
        <p>Pronto, agora que você escolheu seu animal, contate esses emails:</p>
      </div>
      <div class="emails">
        <p>alissonfbrito01@gmail.com</p>
        <p>matheus10decarvalho@gmail.com</p>
        <p>theodoro.obenaus@gmail.com</p>
        <p>eduardorwodtkeifc@gmail.com</p>
      </div>
    </div>
    <div class="voltar">
      <RouterLink to="/" class="voltar">
        <p>Obrigado!</p>
      </RouterLink> 
    </div>
  </div>
</template>

<style scoped>
.voltar {
  background-color: #FAC105;
  color: black;
  font-weight: bold;
  width: 300px;
  text-align: center;
  margin-top: 100px;
  padding: 15px;
  font-size: 24px;
  border-radius: 35px;
  cursor: pointer;
  text-decoration: none;
}

.voltar p {
  margin: 0;
}

.infos {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  text-align: left;
}

.titulo {
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
  font-family: 'Kavoon', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.emails {
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

@media (max-width: 1040px) {
  .infos {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .titulo {
    margin-right: 0;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .voltar {
    width: 80%;
    font-size: 22px;
  }
}

@media (max-width: 600px) {
  .infos {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .titulo {
    font-size: 16px;
    margin-right: 0;
    margin-bottom: 10px;
  }

  .voltar {
    width: 90%;
    font-size: 20px;
    padding: 10px;
  }
}
</style>
