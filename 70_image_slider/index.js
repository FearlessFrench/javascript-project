// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    console.log(intervalId);
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0; // If reach final slide, return to first slide
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide"); // Move to next slide after 5 seconds
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}