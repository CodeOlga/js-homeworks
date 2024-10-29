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
