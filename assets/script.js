const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  },
  
]

const leftArrow = document.getElementById('left_arrow');
const rightArrow = document.getElementById('right_arrow');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const baseUrl = "./assets/images/slideshow/";


const conteneurDots = document.querySelector('.dots');

let dots;


let currentImageIndex = 0;



/*leftArrow.addEventListener("click", function() {
  console.log("j'ai cliqué sur la flêche  gauche")
})


	
rightArrow.addEventListener("click", function() {
  console.log(" j'ai cliqué sur la flêche droite")
})*/


function main(){
  createDots();
  leftArrow.addEventListener('click', prevSlide);
  rightArrow.addEventListener('click', nextSlide);

}
main();



function createDots(){

	for(i=0; i < slides.length ;i++){
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if(i == currentImageIndex)
		{
			dot.classList.add("dot_selected");
		}
		conteneurDots.appendChild(dot);		
	}
	dots = document.querySelectorAll(".dot");

}

function prevSlide() {
  currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
  updateContentSlide();
  updateDots();
}

function nextSlide() {
  currentImageIndex = (currentImageIndex + 1) % slides.length;
  updateContentSlide();
  updateDots();
}


function updateContentSlide(){
  bannerImg.src = baseUrl + slides[currentImageIndex].image;
  tagLine.innerHTML = slides[currentImageIndex].tagLine;
}


function updateDots() {
  dots.forEach(dot => {
    dot.classList.remove('dot_selected');
  });
  dots[currentImageIndex].classList.add('dot_selected');
}

//leftArrow.addEventListener('click', changeImageLeft);
//rightArrow.addEventListener('click', changeImageRight);
