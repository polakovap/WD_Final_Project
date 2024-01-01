// Retrieve the logged-in user information from local storage
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//CXheck if a user is logged in
if (loggedInUser) {
    // Add the user info to the form fields
    document.getElementById('name').value = loggedInUser.name;
    document.getElementById('dateOfBirth').value = loggedInUser.dateOfBirth; 
    document.getElementById('emailAddressID').value = loggedInUser.email;
    document.getElementById('passwordID').value = loggedInUser.password;
} else {
    // Redirect to the login page if no user is logged in
    window.location.href = "login.html";
}