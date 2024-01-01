//GETTING PERSONAL USER INFORMATION 
// Retrieve the logged-in user information from local storage
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//Check if a user is logged in
if (loggedInUser) {
    // Add the user info to the form fields
    document.getElementById('name').value = loggedInUser.name;
    document.getElementById('dateOfBirth').value = loggedInUser.dateOfBirth; 
    document.getElementById('emailAddressID').value = loggedInUser.email;
} else {
    // Redirect to the login page if no user is logged in
    window.location.href = "login.html";
}

//GETTING BOOKING INFORMATION 
// Retrieve the logged-in user information from local storage
var userBookings = JSON.parse(localStorage.getItem('userBookings'));

//Check if there is any booking done
if (userBookings && userBookings.length > 0) {
    // Display all bookings in the form fields
    var bookingTable = document.getElementById('bookingTable');

    userBookings.forEach(function(booking) {
        var row = bookingTable.insertRow();
        var packageCell = row.insertCell(0);
        var guestsCell = row.insertCell(1);
        var arrivalCell = row.insertCell(2);
        var priceCell = row.insertCell(3);

        packageCell.innerHTML = booking.package;
        guestsCell.innerHTML = booking.guests;
        arrivalCell.innerHTML = booking.arrival;
        priceCell.innerHTML = booking.price;
    });
} else {
    // Redirect to the booking page
    window.location.href = "book.html";
}

//BILLING INFORMATION CHECK
document.addEventListener('DOMContentLoaded', function () {
    // Get the billing form
    const billingForm = document.getElementById('billing-information');

    // Add an event listener for form submission
    billingForm.addEventListener('submit', function (event) {
        // Perform custom validation before submitting the form
        if (!validatePaymentInput()) {
            // If validation fails, prevent form submission
            event.preventDefault();
        } else {
            window.location.href="successPayment.html";
        }
    });

    //validate payment input
    function validatePaymentInput() {
        //get values from the form
        const nameCard = document.getElementById('nameCard').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expiration = document.getElementById('expiration').value;
        const cvv = document.getElementById('cvv').value;

        //validate
        if (nameCard.trim() === '' || !isValidCardNumber(cardNumber) || !isValidExpiration(expiration) || !isValidCVV(cvv)) {
            //show error message
            var element = document.getElementById("billingerror");
            element.classList.remove("d-none");
            return false;
        }

        return true;
    }
     
    // Function to validate credit card number
    function isValidCardNumber(cardNumber) {
        // Check if the card number is a valid credit card number
        return /^\d{16}$/.test(cardNumber);
    }

    // Function to validate expiration date
    function isValidExpiration(expiration) {
        //Check if the expiration date is in the future
        const currentDate = new Date();
        const inputDate = new Date(expiration);
        return inputDate > currentDate;
    }

    // Function to validate CVV
    function isValidCVV(cvv) {
        // Check if the CVV is a 3 or 4-digit number
        return /^\d{3,4}$/.test(cvv);
    }
    });

//AFTER CHECKOUT IS COMPLETED
document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById('billing-information');
    const bookingTableBody = document.getElementById('bookingTable').getElementsByTagName('tbody')[0];

    checkoutForm.addEventListener('submit', function (event){
        // Prevent the form from actually submitting 
        event.preventDefault();

        //the checkout logic
        if (isCheckoutSuccessful()) {
            resetBookingHistory();
        }
    });

    function isCheckoutSuccessful(){
        return true;
    }

    function resetBookingHistory(){
        //clear the booking table
        bookingTableBody.innerHTML='';

        var row = bookingTable.insertRow();
        var packageCell = row.insertCell(0);
        var guestsCell = row.insertCell(1);
        var arrivalCell = row.insertCell(2);
        var priceCell = row.insertCell(3);

        packageCell.innerHTML = 'N/A';
        guestsCell.innerHTML = 'N/A';
        arrivalCell.innerHTML = 'N/A';
        priceCell.innerHTML = 'N/A';
        
        //update local storage and reset counter
        localStorage.removeItem('userBookings');
        document.querySelector('#booking').innerHTML = 0;
    }
});