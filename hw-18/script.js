"use strict";

const timerBlock = document.querySelector("#js__timer");

let initialTime = 85;

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
  // 85sec % 60 = 25sec (залишок секунд після виділення повних хвилин)

  return `${minutes}:${seconds}`;
}

function runTimer(timeLeft) {
  timerBlock.textContent = formatTime(timeLeft);

  const timerId = setInterval(() => {
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerId);
      timerBlock.textContent = "00:00";
      alert("Time is over!");
    } else {
      timerBlock.textContent = formatTime(timeLeft);
    }
  }, 1000);
}

runTimer(initialTime);
