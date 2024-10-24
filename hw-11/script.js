//HW 11.1
const tableContainer = document.querySelector(".tableContainer");
const table = document.createElement("table");

// Створюємо 10 рядків
for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  // У кожному рядку створюємо 10 комірок
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = i * j; // Записуємо результат множення в комірку
    row.appendChild(cell);
  }

  table.appendChild(row); // Додаємо рядок у таблицю
}

tableContainer.appendChild(table);

//HW 11.2

const button = document.querySelector(".clickedButton");
const textBlock = document.querySelector(".colorText");

button.addEventListener("click", () =>
  textBlock.classList.toggle("changedColor")
);

//HW 11.3

const imageContainer = document.querySelector(".imageContainer");
const image = document.createElement("img");
const randomNumber = Math.floor(Math.random() * 9) + 1; //отримуємо випадкове ціле число від 1 до 9 включно

image.setAttribute("src", `images/${randomNumber}.jpg`);
imageContainer.appendChild(image);
