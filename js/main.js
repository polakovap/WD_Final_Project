// some basic functionality for login, booking, userdetails

// set the booking figure
if (localStorage.getItem('booking') == null) {  
    localStorage.setItem('booking',0);
}

var booking=localStorage.getItem('booking');
document.querySelector('#booking').innerHTML=booking;

//function to bring the count back to 0 once the transaction is made and delete the localstorage of bookings
//i will call this functio from successPayment.html
function updateBookingCount() {
    localStorage.setItem('booking', 0);
    var booking=localStorage.getItem('booking');
    document.querySelector('#booking').innerHTML = booking;

    localStorage.removeItem('userBookings');
}


// run to update login
var logout = document.getElementById('loginlogout'); 


// add a listener for add to cart if such a button id is pressed
logout.addEventListener("click", Logout);

function Logout() {
    // if user is logged in then log them out and redirect to home page and update the booking count as well
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        updateBookingCount();
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html";
    }
}

// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}




