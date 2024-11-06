"use strict";

const buttonBack = document.querySelector("#button-back");
const buttonNext = document.querySelector("#button-next");
const photos = ["./images/cat.jpg", "./images/dog.jpg", "./images/bird.jpg"];

let i = 0;

buttonNext.addEventListener("click", () => {
  i++;
  if (i > photos.length - 1) {
    i = 0;
  }
  document.querySelector("#pictures").src = photos[i];
});

buttonBack.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = photos.length - 1;
  }
  document.querySelector("#pictures").src = photos[i];
});
