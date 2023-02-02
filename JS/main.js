window.onload = function () {
  // Création de l'objet XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Chargement du fichier info.Json
  
  fetch('JS/info.JSON').then(function(response) { 
    response.json().then(function(jsonData){ 
       
      // Récupération de la div cible
      const container = document.querySelector('#onepage');
      const footer = document.querySelector('#footer');

      const button = document.querySelector('.scroll-down-button');

      button.addEventListener('click', () => {
        console.log('test')
        container.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      });



      // Pour chaque objet dans le tableau JSON
      jsonData.forEach(item => {
        // Création de la div "boxpage"
        const boxpage = document.createElement('div');
        boxpage.className = "boxpage";

        // Définition du fond de la div "boxpage"
        boxpage.style.backgroundImage = `url(${item.background})`;

        // Création de la div qui englobe l'image et la description
        const contentDiv = document.createElement('div');
        contentDiv.className = 'groupimgtxt'

        // Création des éléments HTML
        const title = document.createElement('h2');
        title.textContent = item.titre;

        const description = document.createElement('p');
        description.textContent = item.description;

        const image = document.createElement('img');
        image.src = item.image;

        // Ajout de l'image et de la description à la div de contenu
        contentDiv.appendChild(description);
        contentDiv.appendChild(image);

        // Ajout des éléments à la div "boxpage"
        boxpage.appendChild(title);
        boxpage.appendChild(contentDiv);

        // Ajout de la div "boxpage" à la div cible avant le footer
        container.insertBefore(boxpage, footer);
      });

      document.getElementById('scroll-top').addEventListener('click', function () {
        window.scrollTo(0, 0);
      });


      const button2 = document.querySelector('#scroll-top');

      button2.addEventListener('click', () => {
        console.log('test')
        container.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      });



    })
  })
}