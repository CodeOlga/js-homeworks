// HW 6.1 - 1 спосіб

const enteredString = prompt("Введіть будь-який рядок");
const enteredSymbols = prompt("Введіть символи, які б хотіли видалити").split(
  ""
); //string to array of strings

function removeSymbols(stringToChange, symbolsToRemove) {
  let result = "";

  for (const currentSymbol of stringToChange) {
    if (!symbolsToRemove.includes(currentSymbol)) {
      result += currentSymbol;
    }
  }

  return result;
}

console.log(removeSymbols(enteredString, enteredSymbols));

// HW 6.1 - 2 спосіб

const enteredStringNew = prompt("Введіть будь-який рядок");
const enteredSymbolsNew = prompt(
  "Введіть символи, які б хотіли видалити"
).split("");

function removeSymbolsNew(stringToChangeNew, symbolsToRemoveNew) {
  const regex = new RegExp(`[${symbolsToRemoveNew}.join('')]`, "g");
  return stringToChangeNew.replace(regex, "");
}

const resultNew = removeSymbolsNew(enteredStringNew, enteredSymbolsNew);
console.log(resultNew);

// HW 6.2

const arrayOfElements = [1, "a", true, 2, 3, undefined, 4, 5, 6];

function calcAverageOfNumbers(array) {
  let sumOfNumbers = 0;
  let countOfNumbers = 0;

  for (element of array) {
    if (typeof element === "number") {
      sumOfNumbers += element;
      countOfNumbers++;
    }
  }
  const averageOfNumbers = sumOfNumbers / countOfNumbers;

  return averageOfNumbers;
}

console.log(calcAverageOfNumbers(arrayOfElements));

// HW 6.3 - 1 спосіб

const arrayOfNumbers = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
  const newArrayOfNumbers = [];

  for (element of array) {
    if (element !== item) newArrayOfNumbers.push(element);
  }
  return newArrayOfNumbers;
}

console.log(removeElement(arrayOfNumbers, 4));

// HW 6.3 - 2 спосіб

const arrayOfNumbersNew = [1, 3, 4, 6, 2, 5, 7];

function removeElementNew(array, item) {
  const updatedArray = array.filter((number) => number !== item);

  return updatedArray;
}

console.log(removeElementNew(arrayOfNumbersNew, 4));
