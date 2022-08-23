const slides = document.querySelectorAll(".slides");
const carousel = document.querySelector(".carousel")
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow")

const slideNumber = slides.length;
const currentSlide = 0;5


//adding event listeners
leftArrow.addEventListener("click", () =>{
currentSlide++;
if(currentSlide > slideNumber -1 ){
    currentSlide = 0;
}

updateCarousel()
});

leftArrow.addEventListener("click", () =>{
    currentSlide--
    if(currentSlide < 0){
        currentSlide = slideNumber-1;
    }
});

function updateCarousel(){
    carousel.style.transform
}