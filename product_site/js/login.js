// get the feedback box to display instructions
var feedback = document.getElementById('feedback');

// create variables to store the validity of the username and to get the username input
var validUser = false;
var userInput = document.getElementById('username');


// function to display instructions when the user clicks on the username input
function enterUser(){
    feedback.innerHTML = '<strong> Please enter your username (must be at least 6 characters) </strong>';
}

//  function to check if the username is valid
function fixUser(){
    // check if username is empty and display error message
    if(userInput.value == ''){
        userInput.style.borderColor = 'red';
        feedback.innerHTML = '<strong> You did not enter a username. Please try again. </strong>';
    }
    else{
        // check if username is less than 6 characters and display error message
        if(userInput.value.length < 6){
            userInput.style.borderColor = 'red';
            feedback.innerHTML = '<strong> Username must be at least 6 characters </strong>';
        }
        // username is successful
        else{
            userInput.style.borderColor = 'green';
            validUser = true;
            feedback.innerHTML = '';
        }
    }
}

// prompt to enter a user when it is in focus
userInput.addEventListener('focus', enterUser);
// check if the user is valid when it is out of focus
userInput.addEventListener('blur', fixUser);

// create variables to store the validity of the password and to get the password input
var validPass = false;
var passInput = document.getElementById('password');

// function to display instructions when the user clicks on the password input
function enterPass(){
    feedback.innerHTML = '<strong> Please enter your password (must be at least 8 characters) </strong>';
}

// function to check if the password is valid
function fixPass(){
    // check if password is empty and display error message
    if(passInput.value == ''){
        passInput.style.borderColor = 'red';
        feedback.innerHTML = '<strong> You did not enter a password. Please try again. </strong>';
    }
    else{
        // check if password is less than 8 characters and display error message
        if(passInput.value.length < 8){
            passInput.style.borderColor = 'red';
            feedback.innerHTML = '<strong> Password must be at least 8 characters </strong>';
        }
        else{
            // password is successful
            passInput.style.borderColor = 'green';
            feedback.innerHTML = '';
            validPass = true;
        }
    }
}

// prompt to enter a password when it is in focus
passInput.addEventListener('focus', enterPass);
// check if the password is valid when it is out of focus
passInput.addEventListener('blur', fixPass);


// get the account login form element
var form = document.getElementById('loginForm');


// function to check if the form is valid for submission
function formSubmit(event){
    // check if the username and password are valid
    if(validUser && validPass){
        feedback.innerHTML = '';
        alert('Login for ' + userInput.value + ' successful!');
    }
    else{
        // prevent the form from submitting
        event.preventDefault();
        feedback.innerHTML = '<strong> Please enter a valid username and password </strong>';
    }
}

// call the formSubmit function when the form is submitted
form.addEventListener('submit', formSubmit);