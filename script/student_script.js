import {output} from '/data/app.js';  // Importing output from app.js

function login() {
    output();  // Call the imported output function to log the user details
    setTimeout(function() {
        window.location.replace("/html/student-side-view.html");  // Redirect after logging in
    }, 500);  // Slight delay to ensure console logging happens first
}

// Attach the login function to the global window object so it can be accessed in the HTML
window.login = login;
