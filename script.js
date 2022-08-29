const slides = document.querySelectorAll(".first-container");
const leftArrows = document.querySelectorAll(".prev-arrow");
const rightArrows = document.querySelectorAll(".next-arrow");
const totalSlides = slides.length;

// console.log(slides)
console.log(rightArrows);

//Add an event listener to all the right-arrow
//Apply the hidden class on ever other profile except the next one

let currentProfile = 0;
rightArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    nextSlide();
  });
});

leftArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    prevSlide();
  });
});

function updateProfile() {
  //remove class hidden from the current profile to be shown
  // Add hidden to all other profiles
  slides.forEach((slide, index) => {
    if (currentProfile === index) {
      slide.classList.remove(`hidden`);
    } else {
      slide.classList.add(`hidden`);
    }
  });
}

function prevSlide() {
  console.log(`hey`);
  if (currentProfile === 0) {
    currentProfile = totalSlides - 1;
  } else {
    currentProfile--;
  }
  updateProfile();
}

function nextSlide() {
  if (currentProfile === totalSlides - 1) {
    currentProfile = 0;
  } else {
    currentProfile++;
  }
  updateProfile();
}
