// Array to store user accounts
var userAccounts = [];

// Check if there are existing user accounts stored in localStorage
var storedBookings = localStorage.getItem('userAccounts');
if (storedBookings) {
    userAccounts = JSON.parse(storedBookings);
}

// Function to validate registration (you can customize this as needed)
function validateRegistration(email, password) {
    // Check if the password meets the required criteria
    const MIN_PASSWORD_LENGTH = 8;
    if (password.length < MIN_PASSWORD_LENGTH) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }

    // Check if the email is unique (not already used for another account)
    const isEmailUnique = userAccounts.every(account => account.email !== email);
    if (!isEmailUnique) {
        alert("This email address is already registered. Please use a different email address.");
        return false;
    }

    // If all validation checks pass, return true
    return true;
}

// Export the userAccounts array and validateRegistration function
window.userAccounts = userAccounts;
window.validateRegistration = validateRegistration;
