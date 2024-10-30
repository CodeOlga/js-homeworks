//HW 12.1
const enterLinkBtn = document.querySelector(".enter-link-btn");
const goLinkBtn = document.querySelector(".go-link-btn");
let userLink = "";

enterLinkBtn.addEventListener("click", () => {
  userLink = prompt("Enter your link")?.trim();

  if (userLink) {
    userLink =
      userLink.startsWith("http://") || userLink.startsWith("https://")
        ? userLink
        : `http://${userLink}`;
  } else {
    alert("Please enter a valid link.");
  }
});

goLinkBtn.addEventListener("click", () => {
  if (userLink) {
    location.href = userLink;
  } else {
    alert("No link entered. Please enter a link first.");
  }
});

//HW 12.2
const parentContainer = document.querySelector(".parent-container");

parentContainer.addEventListener("click", (e) => {
  const clickedBtn = e.target;

  alert(`Clicked button: ${clickedBtn.textContent}`);
});

//HW 12.3
const list = document.querySelector(".list");
const input = document.querySelector(".input");
const addItemBtn = document.querySelector(".add-item-btn");

// Обробник для додавання нового завдання
addItemBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    alert("Please, add something");
    return;
  }

  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = inputValue;

  const deleteItemBtn = document.createElement("button");
  deleteItemBtn.classList.add("button", "delete-item-btn");
  deleteItemBtn.textContent = "Delete";

  newItem.appendChild(deleteItemBtn);
  list.appendChild(newItem);

  input.value = "";
});
// Обробник для видалення завдання (подій для делегування)
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-item-btn")) {
    const itemToRemove = e.target.parentElement;
    list.removeChild(itemToRemove);
  }
});
