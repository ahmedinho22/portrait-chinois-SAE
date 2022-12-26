window.onload = function() {
    const data = '[{"titre": "test 1","description": "description test","image": "https://assets.afcdn.com/recipe/20200828/113350_w1024h768c1cx2880cy1920.jpg","background": "https://assets.afcdn.com/recipe/20200828/113350_w1024h768c1cx2880cy1920.jpg"},{"titre": "test 1","description": "description test","image": "https://assets.afcdn.com/recipe/20200828/113350_w1024h768c1cx2880cy1920.jpg","background": "https://assets.afcdn.com/recipe/20200828/113350_w1024h768c1cx2880cy1920.jpg"}]';

const jsonData = JSON.parse(data);

// Récupération de la div cible
const container = document.querySelector('#onepage');


// Pour chaque objet dans le tableau JSON
jsonData.forEach(item => {
    // Création de la div "boxpage"
    const boxpage = document.createElement('div');
    boxpage.className = "boxpage";
  
    // Définition du fond de la div "boxpage"
    boxpage.style.backgroundImage = `url(${item.background})`;
  
    // Création des éléments HTML
    const title = document.createElement('h2');
    title.textContent = item.titre;
  
    const description = document.createElement('p');
    description.textContent = item.description;
  
    const image = document.createElement('img');
    image.src = item.image;
  
    // Ajout des éléments à la div "boxpage"
    boxpage.appendChild(title);
    boxpage.appendChild(description);
    boxpage.appendChild(image);
  
    // Ajout de la div "boxpage" à la div cible
    container.appendChild(boxpage);
  });
  

  };
  