var favMovies = ["Scarface", "Dirty Dancing", "Toy Story"];
var urls = ["https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg","https://upload.wikimedia.org/wikipedia/en/0/00/Dirty_Dancing.jpg", "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"];
var htmls = ["https://afriasv.rhody.dev/csc271_projects/labs/lab8_uri_mdb-main/scarface.html", "dirty-dancing.html", "toy-story.html"];
var ratings = [4, 5, 3];


var cards = document.querySelectorAll('.movie-card');
console.log(cards);
for(let i = 0; i < cards.length; i++){
	console.log(cards[i]);

	var img = cards[i].querySelector('.movie-image');
	console.log(img);
	img.src = urls[i];
	img.alt = favMovies[i];

	var link = cards[i].querySelector('.movie-link');
	link.href = htmls[i];
	link.textContent = favMovies[i];

	var rating = cards[i].querySelector('.rating');
	var stars = "";
	for(let j = 0; j < 5; j++){
		if(j < ratings[i]){
			stars += "★";
		}
		else{
			stars += "☆";
		}
	}
	rating.textContent = stars;
}