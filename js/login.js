var loginStatus = document.getElementById('user-login');

// add a listener for add to cart if such a button id is pressed
loginStatus.addEventListener("submit", loginUser);

function loginUser(event) {
    event.preventDefault();

    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    
    //go through userAccounts array
    for(var i = 0; i < userAccounts.length; i++) {
        var userEmail = userAccounts[i].email;
        var userPassword = userAccounts[i].password;

        //check if the email and password match
        if(userEmail === email && userPassword === password) {
            //successful login, set loggedIN flag and redirect
            localStorage.setItem('loggedIn', 1);
            
            // After successful login, store the user information in the local storage
            var loggedInUser = { name: userAccounts[i].name, dateOfBirth: userAccounts[i].birth, email: userAccounts[i].email, password: userAccounts[i].password };
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            
            window.location.href = "book.html";  // Redirect to booking page
            return;  // Exit the function once a match is found
        }
    }
        
    // If no match is found, show error message
    localStorage.setItem('loggedIn', 0);
    var element = document.getElementById("loginerror");
    element.classList.remove("d-none");

}

