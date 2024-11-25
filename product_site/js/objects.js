// create function to display the events
// get the line it will be displayed on
// display the event name, date, location, and total fee on line
function displayEvent(eventNum, eventDate, eventLocation, totalFee){
    var line = document.getElementsByClassName('event')[eventNum];
    line.innerHTML += "Taylor Swift Concert: " + eventDate + " in " + eventLocation + " (Total Fee: $" + totalFee + ")";
}

// function to create an object with the event number, date, location, and total fee
function saved(eventNum, eventDate, eventLocation){
    this.eventNum = eventNum;
    this.eventDate = eventDate;
    this.eventLocation = eventLocation;

    // method to calculate the total fee with 7% tax
    this.totalFee = function(pricing){
        var taxes = .07;
        var total = pricing + (pricing * taxes);
        return total;
    }
};


// event 1 object created with the event number, date, and location before being displayed with displayEvent function
var event1 = new saved(0, "October 19th", "Miami, FL");
displayEvent(event1.eventNum, event1.eventDate, event1.eventLocation, event1.totalFee(3500));

// event 2 object created with the event number, date, and location before being displayed with displayEvent function
var event2 = new saved(1, "November 26th", "New Orleans, LA");
displayEvent(event2.eventNum, event2.eventDate, event2.eventLocation, event2.totalFee(3050));

// event 3 object created with the event number, date, and location before being displayed with displayEvent function
var event3 = new saved(2, "December 2nd", "Indianapolis, IN");
displayEvent(event3.eventNum, event3.eventDate, event3.eventLocation, event3.totalFee(5000));