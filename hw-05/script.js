// HW 5.1

let number = 20;
let result = "";

while (number <= 30) {
  result += `${number} `;
  number += 0.5;
}

console.log(result.trimEnd());

// HW 5.2

const exchangeRate = 26;
let res = "";

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let costInUAH = dollars * exchangeRate;
  res += `${dollars} доларів = ${costInUAH} гривень\n`;
}

console.log(res);

// HW 5.3
// HW 5.4