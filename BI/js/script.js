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

// CONTACT NAV TOGGLE

const [cnavTogglers, cnavLinks, cnavbar, coverlay] = [
  document.querySelectorAll("[data-cnav-toggler]"),
  document.querySelectorAll("[data-cnav-link]"),
  document.querySelector("[data-cnavbar]"),
  document.querySelector("[data-coverlay]")
];

const togglecNav = function () {
  cnavbar.classList.toggle("active");
  coverlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(cnavTogglers, "click", togglecNav);

const closecNav = function () {
  cnavbar.classList.remove("active");
  coverlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(cnavLinks, "click", closecNav);



// HEADER & FOOTER

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

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
