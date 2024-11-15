// display Search Results with a function
// get the h2 element by its tag name and change the text content to "Search Results"
function displaySearchTitle(){
    var results = document.querySelectorAll('h2');
    results[0].textContent = "Search Results";
}

// call the function to display the search results (no parameters or return)
displaySearchTitle();

// Declaring variables
// lists for multiple locations and keywords
var searched = ["Taylor Swift", "concert", "North America"];
var locations = ["Miami, FL", "New Orleans, LA", "Indianapolis, IN"]
var dates = ["October 19th", "November 26th", "December 2nd"];

// create a function to calculate the average price
function average(highNum, lowNum, total){
    var result = (highNum + lowNum) / total; // add the high and low and then divide by the total
    return result;
}

// int variables for Miami pricing
// variables store high/low prices and then calculate average price
var highpriceMIAMI = 5000;
var lowpriceMIAMI = 2000;
var avgMIAMI = average(highpriceMIAMI, lowpriceMIAMI, 2); // call the function to calculate the average price of Miami

// int variables for New Orleans pricing
// variables store high/low prices and then calculate average price
var highpriceNOLA = 4000;
var lowpriceNOLA = 2100;
var avgNOLA = average(highpriceNOLA, lowpriceNOLA, 2); // call the function to calculate the average price of New Orleans

// int variables for Indianapolis pricing
// variables store high/low prices and then calculate average price
var highpriceIND = 7000;
var lowpriceIND = 3000;
var avgIND = average(highpriceIND, lowpriceIND, 2); // call the function to calculate the average price of Indianapolis

//store averages in a list
var avgPrices = [avgMIAMI, avgNOLA, avgIND];

// get the heading that will list the search result by its ID
// change the text content to include label
// iterate through for-loop to add each element from searched list to text
var results = document.getElementById('listResults');
results.textContent = "Search Results For: ";

// chose a for loop because it will iterate through the list of searched items and add them to the text content
for(let i = 0; i < searched.length; i++){
    results.innerHTML += searched[i] + " ";
};

// get the events by the p-tag
// update each event to reflect location/matching date
var events = document.getElementsByTagName('p');

// make this into a function, otherwise it was 3 lines of same code
// function takes in search, location, and date, returns a string that contains them all
function updateEvent(search, location, date){
    var update = search + " at " + location  + " on " + date;
    return update;
}

// call the function for each event
for(let i = 0; i < locations.length; i++){
    events[i].innerHTML = updateEvent(searched[0], locations[i], dates[i]);
}


// adding avg prices (calculations from above) by p query-selector
// use innerHTML to add pricing to end
var pricing = document.querySelectorAll('p');
var count = 0;



// use a while-loop to iterate through the pricing array by a counter while it is less than the length of avgPrices
// add the average price to the end of the pricing array
// chose this loop because it will iterate through the array until the end and add the average price to the end of the pricing array
var answers = 0;
while(count < avgPrices.length){
    pricing[count].innerHTML += " (Average price: $" + avgPrices[count] + ")";
    pricing[count].setAttribute('data-rating', avgPrices[count]);
    count++;
}

// get the resultNum class 
// change the text content to include the amount of locations (total results)
var total = document.getElementsByClassName('resultNum');
total[0].textContent = "Number of results shown: " + locations.length + " results";

// get the dropdown element for filtering prices by its ID
var filterDropdown = document.getElementById('price-filter');


// FILTER FUNCTION
// create a function to filter the prices
// iterate through the pricing array
// store the currently selected rating from the dropdown
// display corresponding prices based on the selected dropdown value
function filterSwap(){
    answers = 0;
    // Store the currently selected rating from the dropdown
    var selected_price = filterDropdown.value;
    for(let i = 0; i < pricing.length; i++){
        var rating = pricing[i];
        var num = rating.getAttribute('data-rating');

        // if the selected price is 'All' or the selected price is within the range of the average price
        if(selected_price == 'All'){
            pricing[i].style.display = "block";
            answers++;
        }
        // if the selected price is less than the average price
        else if(selected_price <= num && selected_price >= num-1000){
            pricing[i].style.display = "block";
            answers++;
        }
        // if the selected price is greater than the average price
        else if(selected_price >= num + 1000){
            pricing[i].style.display = "none";
        }
        // if the selected price is not within the range of the average price
        else{
            pricing[i].style.display = "none";
        }
    }

    // print the new answer count
    if(answers == 0){
        total[0].textContent = "No results found";
    }
    else{
        total[0].textContent = "Number of results shown: " + answers + " results";
    }
}

// add an event listener to the dropdown to call the filter function when the value changes
filterDropdown.addEventListener('change', filterSwap);




