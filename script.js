let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  
  slides[currentSlide].classList.add("active");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide2");

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active2");
  
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  
  slides[currentSlide].classList.add("active2");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide3");

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active3");
  
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  
  slides[currentSlide].classList.add("active3");
}
