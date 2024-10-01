// HW 4.1

const userName = prompt("What is your name?");
alert(`Hello ${userName}! How are you?`);

// HW 4.2

const enteredNumber = prompt("Enter three-digit number"); //string
const digits = enteredNumber.split(""); //array of strings

const allEqual = digits[0] === digits[1] && digits[1] === digits[2];
const someEqual =
  digits[0] === digits[1] || digits[0] === digits[2] || digits[1] === digits[2];

if (allEqual) {
  console.log("All digits are equal");
} else if (someEqual) {
  console.log("Some digits are equal");
} else {
  console.log("All digits are not equal");
}
