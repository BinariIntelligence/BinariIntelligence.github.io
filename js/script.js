'use strict';



// add Event on multiple elment

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});



 // PAGE NAV TOGGLE

const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]")
];

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);


//Video play interval

// Function to replay the video
// function replayVideo() {
//   var video = document.getElementById('video-background');
//   video.currentTime = 0; // Set the current playback time to the beginning
//   video.play(); // Play the video
// }

// // Set interval to replay the video every 2 seconds
// setInterval(replayVideo, 15000);

// var video = document.getElementById('video-background');

//   video.onloadedmetadata = function() {
//     // Set the time limits for the loop
//     video.currentTime = 0; // start at the beginning
//   };

//   video.ontimeupdate = function() {
//     // Check if 5 seconds have elapsed
//     if (video.currentTime >= ) {
//       video.pause(); // Pause the video
//       setTimeout(function() {
//         video.currentTime = 0; // Rewind to the start
//         video.play(); // Play again
//       }, 10000);
//     }
//   };


/**
 * TEXT ANIMATION EFFECT FOR HERO SECTION
 */

const wordBoxes = document.querySelectorAll("[word-effect]");

let activeWordBoxIndex  = 0;
let lastActiveWordBoxIndex = 0;
let totalWordBoxDelay = 2;

const setWordEffect = function () {
  // loop through all letter boxes
  for (let i = 0; i < wordBoxes.length; i++) {

  wordBoxes[i].style.animationDelay = `${totalWordBoxDelay}s`;
  
  // add active class on last active letter box
  if (i === lastActiveWordBoxIndex) {
    wordBoxes[i].classList.add("active");
  } else {
    wordBoxes[i].classList.remove("active");
  }

  }

  setTimeout(function () {
  lastActiveWordBoxIndex = activeWordBoxIndex ;

  // update activeWordBoxIndex  based on total letter boxes
  activeWordBoxIndex  >= wordBoxes.length - 1 ? activeWordBoxIndex  = 0 : activeWordBoxIndex ++;

  setWordEffect();
  }, (totalWordBoxDelay * 1000));
}

// call the letter effect function after window loaded
window.addEventListener("load", setWordEffect);


/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

    if (elementIsInScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);

scrollReveal();


/**
 * dynamically adjusting container for screen size > 1500px
 */
// Function to update container size
function updateContainerSize() {

  // Check if the screen width is greater than 1400px
  if (window.innerWidth >= 1500) {
    // Get the current width of the screen
    const screenWidth = window.innerWidth;

    // Calculate the container size by subtracting 50px from the screen width
    const containerSize = screenWidth - 200;

    // Set the container size dynamically using JavaScript inside the media query block
    document.documentElement.style.setProperty('--container-size', `${containerSize}px`);
  }

}

// Call the function initially
updateContainerSize();

// Event listener for window resize
window.addEventListener('resize', updateContainerSize);

