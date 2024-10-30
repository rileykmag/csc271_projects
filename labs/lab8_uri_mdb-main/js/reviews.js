var usernames = ["user1", "user2", "user3"];
var dates = ["2024-10-27", "2024-10-29", "2024-10-30"];
var reviews = ["Loved it!", "Hated it!", "It was okay."];
var ratings = [5, 1, 3];


var cards = document.querySelectorAll('.review-card');
for(let i = 0; i < cards.length; i++){
	var rating = cards[i].querySelector('.review-rating');
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
	rating.setAttribute('data-rating', ratings[i]);

	var username = cards[i].querySelector('.review-username');
	console.log(username);
	username.firstChild.textContent = usernames[i] + " ";

	var date = cards[i].querySelector('.review-date');
	date.textContent = dates[i];

	var text = cards[i].querySelector('.review-text');
	text.textContent = reviews[i];
}



// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;

	for(let i = 0; i < cards.length; i++){
		var rating = cards[i].querySelector('.review-rating');
		var num = rating.getAttribute('data-rating');

		if(selected_rating == 'All' || selected_rating == num){
			cards[i].style.display = "block";
		}
		else{
			cards[i].style.display = "none";
		}
	}

});



