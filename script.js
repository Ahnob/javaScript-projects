const slides = document.querySelectorAll(".container");
const leftArrow = document.querySelector(".prev-arrow");
const rightArrow = document.querySelector(".next-arrow")
console.log(slides)

//Add an event listener to all the right-arrow 
//Apply the hidden class on ever other profile except the next one

let currentProfile = 0;
rightArrow.addEventListener("click", ()=>{
    slides[1].classList.remove("hidden");
    currentProfile++
})


