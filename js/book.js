// Code to calculate the price
document.addEventListener('DOMContentLoaded', function () {
    // Get needed elements
    const choosePackage = document.getElementById('choosePackage');
    const guestsAmount = document.getElementById('guestsAmount');
    const totalPriceElement = document.getElementById('totalPrice');

    // Prices for each retreat package
    const packagePrices = {
        'Northern Lights Package': 7500,
        'Wellness & Spa Escape': 9000,
        'Arctic Adventure Bundle': 9000,
        'Culinary Expedition': 8500,
        'Fjord Serenity Package': 10000,
        'Aurora Aromatherapy Retreat': 10000,
    };

    // Function to update the total price
    function updateTotalPrice() {
        // Get the selected options
        const selectedPackage = choosePackage.value;
        const numberOfGuests = parseInt(guestsAmount.value);

        // Validate the inputs
        if (!selectedPackage || isNaN(numberOfGuests) || numberOfGuests < 1) {
            totalPriceElement.textContent = 'N/A';
            return;
        }

        // Calculate the total price
        const totalPrice = packagePrices[selectedPackage] * numberOfGuests;

        // Display the total price
        totalPriceElement.textContent = `NOK${totalPrice}`;
        totalPriceElement.value = `NOK${totalPrice}`;
    }

    // Event listeners for input changes
    choosePackage.addEventListener('input', updateTotalPrice);
    guestsAmount.addEventListener('input', updateTotalPrice);

    // Initial update when the page loads
    updateTotalPrice();




    //array to store bookings
    var userBookings = [];

    // Check if there are existing user bookings stored in localStorage
    var storedBookings = localStorage.getItem('userBookings');
    if (storedBookings) {
        userBookings = JSON.parse(storedBookings);
    }

    var addBooking = document.getElementById('addBooking');

    // add a listener for add to bookings
    addBooking.addEventListener("click", handleBooking);


    function handleBooking() {
        //check if a user is logged in
        var loggedin=localStorage.getItem('loggedIn'); 
        var element = document.getElementById("userdetails");
        if (loggedin==1) {
            // Get the values from the form
            var selectedPackage = document.getElementById('choosePackage').value;
            var numberOfGuests = document.getElementById('guestsAmount').value;
            var arrivalDate = document.getElementById('dateOfArrival').value;
        
            // Check if all required fields are filled
            if (!selectedPackage || !numberOfGuests || !arrivalDate) {
                return;
            }

            var total=localStorage.getItem('booking');
            total++;
            localStorage.setItem('booking',total);
            document.querySelector('#booking').innerHTML=total;

            var package = document.getElementById('choosePackage').value;
            var guests = document.getElementById('guestsAmount').value;
            var arrival = document.getElementById('dateOfArrival').value;
            var price = document.getElementById('totalPrice').value;

            // add the booking to the array
            let booking = { package: package, guests: guests, arrival: arrival, price: price };
            userBookings.push(booking);

            // Save the updated bookings array to localStorage
            localStorage.setItem('userBookings', JSON.stringify(userBookings));
        } else {
            // If no user is logged in, prompt the user to log in
            alert('Please log in to add a booking.');
        }
    }
});

