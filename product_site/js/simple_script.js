// Declaring variables
// lists for multiple locations and keywords
var searched = ["Taylor Swift", "concert", "North America"];
var locations = ["Miami, FL", "New Orleans, LA", "Indianapolis, IN"]

// string variables to store the months
var month1 = "October";
var month2 = "November"

// int variables to store the dates
var dateMIAMI = 19;
var dateNOLA = 26;
var dateIND = 2;

// int variables for Miami pricing
// variables store high/low prices and then calculate average price
var highpriceMIAMI = 5000;
var lowpriceMIAMI = 2000;
var avgMIAMI = ((highpriceMIAMI + lowpriceMIAMI) / 2)

// int variables for New Orleans pricing
// variables store high/low prices and then calculate average price
var highpriceNOLA = 4000;
var lowpriceNOLA = 2100;
var avgNOLA = ((highpriceNOLA + lowpriceNOLA) / 2)

// int variables for Indianapolis pricing
// variables store high/low prices and then calculate average price
var highpriceIND = 7000;
var lowpriceIND = 3000;
var avgIND = ((highpriceIND + lowpriceIND) / 2)

// get the heading that will list the search result by its ID
// change the text content to include label
// iterate through for-loop to add each element from searched list to text
var results = document.getElementById('listResults');
results.textContent = "Search Results For: ";
for(let i = 0; i < searched.length; i++){
    results.innerHTML += searched[i] + " ";
};

// get the resultNum class 
// change the text content to include the amount of locations (total results)
var total = document.getElementsByClassName('resultNum');
total[0].textContent += locations.length;

// get the events by the p-tag
// update each event to reflect location/matching date
var events = document.getElementsByTagName('p');
events[0].innerHTML += searched[0] + " at " + locations[0] + " on " + month1 + " " + dateMIAMI + "th";
events[1].innerHTML += searched[0] + " at " + locations[1] + " on " + month1 + " " + dateNOLA + "th";
events[2].innerHTML += searched[0] + " at " + locations[2] + " on " + month2 + " " + dateIND + "nd";

// adding avg prices (calculations from above) by p query-selector
// use innerHTML to add pricing to end
var pricing = document.querySelectorAll('p');
pricing[0].innerHTML += " (Average price: $" + avgMIAMI + ")";
pricing[1].innerHTML += " (Average price: $" + avgNOLA + ")";
pricing[2].innerHTML += " (Average price: $" + avgIND + ")";

