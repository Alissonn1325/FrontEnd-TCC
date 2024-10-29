<template>
  <footer>

    <div id="foter">
      <div id="footer_content">
        <div id="footer_contacts">
          <div>
        <h1>Contate-nos</h1>
        <div id="footer_social_media">
          <a href="https://www.instagram.com/teteu_hmc/" class="footer-link" id="instagram">
            <i class="mdi mdi-instagram"></i>
          </a>
          
          <a href="https://discord.gg/cQ4DKmH2JR" class="footer-link" id="discord">
            <i class="mdi mdi-chat-outline"></i>
          </a>
          
          <a href="https://github.com/TheodoroObenaus" class="footer-link" id="github">
            <i class="mdi mdi-github"></i>
          </a>
        </div>
      </div>
      
      <ul class="footer-list">
        <li>
          <h3>API</h3>
        </li>
        <li>
          <a href="https://www.themoviedb.org/" class="footer-link">TMDB</a>
        </li>
        
        <li>
          <a href="https://developer.themoviedb.org/reference/intro/getting-started" class="footer-link">Database</a>
        </li>
      </ul>
      
      <ul class="footer-list">
        <li>
          <h3>Legalidade</h3>
        </li>
        <li>
          <a href="https://www.themoviedb.org/api-terms-of-use?language=pt-BR" class="footer-link">Termos de Uso da API</a>
        </li>
        
        <li>
          <a href="https://www.themoviedb.org/privacy-policy?language=pt-BR" class="footer-link">Política de Privacidade</a>
        </li>
      </ul>
    </div>
  </div>
  
  <div id="footer_copyright">&#169; FURBUDS</div>
  
</div>
</footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer-link {
  text-decoration: none;
}

#footer_content {
  background: #FAC105;
  display: grid;
  padding: 3rem 3.5rem;
  justify-content: space-evenly;
}

#footer_contacts {
  display: flex;
  flex-direction: row;
  column-gap: 12rem;

}

#footer_social_media {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

#footer_social_media .footer-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  transition: all 0.4s;
}

#footer_social_media .footer-link:hover {
  opacity: 0.6;
}

#footer_social_media .footer-link i {
  font-size: 1.25rem;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
}

#input_group {
  display: flex;
  align-items: center;
  border-radius: 4px;
}

#input_group input {
  all: unset;
  padding: 0.75rem;
  width: 100%;
}

#footer_copyright {
text-align: center;

}

p {
  color: rgb(0, 0, 0);
}

h1, h3 {
  color: rgb(0, 0, 0);
  font-family: 'Kavoon', sans-serif;
}

a {
  color: rgb(0, 0, 0);
  font-family: 'Kavoon', sans-serif;
}
</style>