"use strict";

const date = document.querySelector(".date");
const time = document.querySelector(".time");
const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const wind = document.querySelector(".wind");
const feels = document.querySelector(".feels");
const cloud = document.querySelector(".cloud");

const refetchBtn = document.querySelector(".refetch-btn");

function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    weekday: "short",
  };

  return currentDate.toLocaleDateString("en-US", options);
}

function getCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

function sendRequest() {
  const API_KEY = "a7c4a244b63c51c7f8604558747c72d1";

  const weatherResponse = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=56.96&lon=24.10&appid=${API_KEY}&units=metric`
  );

  weatherResponse
    .then((response) => response.json())
    .then((data) => {
      city.textContent = data.name;
      temperature.textContent = `${Math.round(data.main.temp)}\u00B0C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
      wind.textContent = `Wind: ${Math.round(data.wind.speed)} km/h`;
      feels.textContent = `Feels Like: ${Math.round(
        data.main.feels_like
      )}\u00B0C`;
      cloud.textContent = data.weather[0].main;

      date.textContent = getCurrentDate();
      time.textContent = getCurrentTime();
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

refetchBtn.addEventListener("click", () => sendRequest());

sendRequest();
