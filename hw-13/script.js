"use strict";

const form = document.querySelector("form");
const errorMessages = form.querySelectorAll("p");
const inputs = form.querySelectorAll("input, textarea");

const regExpName = /^[a-zа-я]+$/i; // обов'язкове текстове поле
const regExpMessage = /.{5,}/; // текстове поле не менше 5 символів
const regExpPhone = /^\+380\d{9}$/; // обов'язкове поле типу phone. З початком на +380
const regExpEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i; // email обов'язково повинен мати @ та крапку

const validateField = (regExp, value, errorMessage, inputElement) => {
  if (!regExp.test(value)) {
    errorMessage.classList.remove("hide");
    inputElement.classList.add("error-border");
    return false; // поле невалідно
  } else {
    errorMessage.classList.add("hide");
    inputElement.classList.remove("error-border");
    return true; // поле валідно
  }
};

// обработка подій focus та blur на inputs
inputs.forEach((input, index) => {
  const errorMessage = errorMessages[index];
  const regExp = [regExpName, regExpMessage, regExpPhone, regExpEmail][index];

  input.addEventListener("focus", () => {
    errorMessage.classList.add("hide");
    input.classList.remove("error-border");
  });

  input.addEventListener("blur", () => {
    validateField(regExp, input.value, errorMessage, input);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formObj = {};

  formData.forEach((value, key) => (formObj[key] = value));

  const { name, message, tel, email } = formObj;

  // валідація кожного поля
  const isNameValid = validateField(
    regExpName,
    name,
    errorMessages[0],
    inputs[0]
  );
  const isMessageValid = validateField(
    regExpMessage,
    message,
    errorMessages[1],
    inputs[1]
  );
  const isPhoneValid = validateField(
    regExpPhone,
    tel,
    errorMessages[2],
    inputs[2]
  );
  const isEmailValid = validateField(
    regExpEmail,
    email,
    errorMessages[3],
    inputs[3]
  );

  // перевіряємо, що всі поля валідні перед відправкою форми
  if (isNameValid && isMessageValid && isPhoneValid && isEmailValid) {
    console.log(`
      Name: ${name},
      Message: ${message},
      Phone number: ${tel},
      Email: ${email}
    `);

    form.reset();
  }
});
