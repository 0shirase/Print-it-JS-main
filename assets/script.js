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
	}
]

let left_arrow = document.getElementById("left_arrow")
	
left_arrow.addEventListener("click", function() {
	console.log("j'ai cliqué sur la flêche  gauche")
})

let right_arrow = document.getElementById("right_arrow")
	
right_arrow.addEventListener("click", function() {
	console.log(" j'ai cliqué sur la flêche droite")
})