const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];


const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
let  index = 0;

//  clic flèche 

arrowLeft.addEventListener('click',function (){
    index--;
    updateCarousel(index, 'left');
    displayDots(index);
}); 

arrowRight.addEventListener('click', function (){
    index++;
    updateCarousel(index, 'right');
    displayDots(index);
});

// fonction pour carousel

function updateCarousel(_index, direction) {
    
    //Revenir à la page
    if (_index === -1 && direction === 'left') { // Si la valeur de la variable _index est egale a -1 et que je clic sur left alors la condiction est executé 
      index = slides.length - 1;  //Ajustement de la variable index pour qu'elle soit égale à la position du dernier élément du tableau slide.
  } else if (_index === slides.length && direction === 'right') { // si index = la longueur du tableau slide et qu'on clic sur right
      index = 0;  //on revient a 0
  }

    // Mettre à jour l'image 
    const imagePath = `assets/images/slideshow/${slides[index].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slides ${index + 1}`; //accesibilité

    // Mettre à jour le texte
    const tagLine = slides[index].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    // Affichage d'un message dans la console indiquant la direction du clic
    console.log(`Clic sur la flèche ${direction}`);
}

// Dots

function displayDots(){
    dots.innerHTML = '';
    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div"); // Création d'une nouvelle balise "div" à chaque boucle
        dot.classList.add("dot"); // Ajout de la classe "dot" dans la balise "div"
        dots.appendChild(dot); // Ajout de "dot" a l'élément parent "dots"
        if (i == index) {
            dot.classList.add("dot_selected");
        }                      // Ajout du dot_selected si i correspond a la valeur de l'index 
    }
}
displayDots()
