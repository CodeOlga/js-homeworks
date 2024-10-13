// HW 7.1

function getSum() {
  let y = 0;

  return function (x) {
    y += x; // y = y + x;

    return y;
  };
}

const sum = getSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

// HW 7.2

function multiplyCurrying(a) {
  return (b) => {
    return a * b;
  };
}

console.log(multiplyCurrying(5)(2));

// HW 7.3

function getNumber() {
  let lastEnteredNumber = null;

  for (let i = 0; i < 10; i++) {
    let enteredNumber = +prompt("Enter any number greater then 100");
    lastEnteredNumber = enteredNumber;

    if (enteredNumber > 100 || i === 10) {
      console.log(enteredNumber);
      return;
    }
  }
  console.log(lastEnteredNumber);
}
getNumber();
