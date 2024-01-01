// Function to handle user registration
function handleRegistration(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var birth = document.getElementById('dateOfBirth').value;
    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;

    if (validateRegistration(name, birth, email, password)) {
        // Registration successful, add the user to the array
        let user = { name: name, birth: birth, email: email, password: password };
        userAccounts.push(user);

        // Save the updated user accounts array to localStorage
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));

        // Display a success message
        var element = document.getElementById("registrationDone");
        element.classList.remove("d-none");
    } else {
        // Registration unsuccessful
        var errorElement = document.getElementById('registrationError');
        errorElement.innerHTML = "Registration failed. Please check your information and try again.";
        errorElement.classList.remove("d-none");
    }
}

// Add an event listener to the registration form
var registrationForm = document.getElementById('user-registration');
registrationForm.addEventListener("submit", handleRegistration);