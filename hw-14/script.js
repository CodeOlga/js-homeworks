"use strict";

const buttonPrev = document.querySelector("#button-prev");
const buttonNext = document.querySelector("#button-next");
const slides = document.querySelectorAll(".image-item");
const dots = document.querySelectorAll(".dot");

let currentSlide = document.querySelector(".is-visible");
let currentDot = document.querySelector(".is-active");

const updateSlide = (newSlide, newDot) => {
  currentSlide.classList.remove("is-visible");
  currentDot.classList.remove("is-active");

  currentSlide = newSlide;
  currentDot = newDot;

  currentSlide.classList.add("is-visible");
  currentDot.classList.add("is-active");

  buttonNext.classList.toggle(
    "is-hidden",
    currentSlide === slides[slides.length - 1]
  ); // (class, умова) // останній слайд
  buttonPrev.classList.toggle("is-hidden", currentSlide === slides[0]); // перший слайд
};

buttonNext.addEventListener("click", () => {
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  const nextDot = currentDot.nextElementSibling || dots[0];
  updateSlide(nextSlide, nextDot);
});

buttonPrev.addEventListener("click", () => {
  const prevSlide =
    currentSlide.previousElementSibling || slides[slides.length - 1];
  const prevDot = currentDot.previousElementSibling || dots[dots.length - 1];
  updateSlide(prevSlide, prevDot);
});
