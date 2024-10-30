var info = ["Dirty Dancing", "https://upload.wikimedia.org/wikipedia/en/0/00/Dirty_Dancing.jpg", 5, 
    "Baby (Jennifer Grey) is one listless summer away from the Peace Corps. Hoping to enjoy her youth while it lasts, she's disappointed when her summer plans deposit her at a sleepy resort in the Catskills with her parents. Her luck turns around, however, when the resort's dance instructor, Johnny (Patrick Swayze), enlists Baby as his new partner, and the two fall in love. Baby's father forbids her from seeing Johnny, but she's determined to help him perform the last big dance of the summer."];


var heading = document.querySelector('h1');
heading.textContent = info[0];


var img = document.querySelector('.movie-image');
img.src = info[1];
img.alt = info[0];

var title = document.querySelector('.movie-name');
title.textContent = info[0];

var descr = document.querySelector('.description');
descr.textContent = info[3];

var rating = document.querySelector('.rating');
var stars = "";
for(let i = 0; i < 5; i++){
    if(i < info[2]){
        stars += "★";
    }
    else{
        stars += "☆";
    }
}
rating.textContent = stars;