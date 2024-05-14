let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px"
}


// JavaScript function to navigate and blink
function navigateAndBlink() {
    // Get the target h1 element
    var targetHeading = document.getElementById('target-heading');

    // Scroll to the target heading
    targetHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Define blinking interval
    var blinkInterval = setInterval(function () {
        // Toggle visibility of the heading
        targetHeading.style.visibility = (targetHeading.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500); // Adjust blinking speed as needed, here it's set to 500 milliseconds

    // Stop blinking after 3 seconds
    setTimeout(function () {
        clearInterval(blinkInterval);
        // Ensure heading is visible after blinking stops
        targetHeading.style.visibility = 'visible';
    }, 3000); // Adjust blinking duration as needed, here it's set to 3 seconds
}

// Attach event listener to the link
var navigateLink = document.getElementById('navigate-link');
navigateLink.addEventListener('click', function (event) {
    // Prevent default link behavior
    event.preventDefault();
    // Call the navigateAndBlink function
    navigateAndBlink();
});



function navigateAndBlink1() {
    var targetHeading1 = document.getElementById('target-heading1');
    targetHeading1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    var blinkInterval = setInterval(function () {
        targetHeading1.style.visibility = (targetHeading1.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500); 
    setTimeout(function () {
        clearInterval(blinkInterval);
        targetHeading1.style.visibility = 'visible';
    }, 3000);
}
var navigateLink1 = document.getElementById('navigate-link1');
navigateLink1.addEventListener('click', function (event) {
    event.preventDefault();
    navigateAndBlink1();
});

//spinner

window.addEventListener('load', function() {
  var preloaderContainer = document.getElementById('preloader-container');
  preloaderContainer.style.display = 'none'; // Hide the spinner when page is loaded

});

