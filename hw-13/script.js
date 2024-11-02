"use strict";

const form = document.querySelector("form");
const errorMessages = form.querySelectorAll("p");

const regExpName = /^[a-zа-я]+$/i; // обов'язкове текстове поле
const regExpMessage = /.{5,}/; // текстове поле не менше 5 символів
const regExpPhone = /^\+380\d{9}$/; // обов'язкове поле типу phone. З початком на +380
const regExpEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i; // email обов'язково повинен мати @ та крапку

const validateField = (regExp, value, errorMessage) => {
  if (!regExp.test(value)) {
    errorMessage.classList.remove("hide");

    return false; // поле невалідно
  } else {
    errorMessage.classList.add("hide");

    return true; // поле валідно
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formObj = {};

  formData.forEach((value, key) => (formObj[key] = value));

  const { name, message, tel, email } = formObj;

  // валідація кожного поля
  const isNameValid = validateField(regExpName, name, errorMessages[0]);
  const isMessageValid = validateField(
    regExpMessage,
    message,
    errorMessages[1]
  );
  const isPhoneValid = validateField(regExpPhone, tel, errorMessages[2]);
  const isEmailValid = validateField(regExpEmail, email, errorMessages[3]);

  // перевіряємо, що всі поля валідні перед відправкою форми
  if (isNameValid && isMessageValid && isPhoneValid && isEmailValid) {
    console.log(`
    Name: ${name},
    Massage: ${message},
    Phone number: ${tel},
    Email: ${email}
  }`);

    form.reset();
  }
});
