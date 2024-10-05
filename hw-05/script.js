// HW 5.1

let number = 20;
let result = "";

while (number <= 30) {
  result += `${number} `;
  number += 0.5;
}

console.log(result.trimEnd());

// HW 5.2

const costUSD = 26;
let res = "";

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let costUAH = dollars * costUSD;
  res += `${dollars} доларів = ${costUAH} гривень\n`;
}

console.log(res);

// HW 5.3

const integer = parseInt(prompt("Please put any number"));

const integerArray = [];

for (i = 1; i <= 100; i++) {
  if (i * i <= integer) {
    integerArray.push(i);
  }
}
console.log(integerArray);

// HW 5.4

const num = parseInt(prompt("Введіть ціле число:"));
let isPrime = num > 1;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(`${num} ${isPrime ? "є" : "не є"} простим числом`);
