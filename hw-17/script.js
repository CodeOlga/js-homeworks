// ===========1===========
// якщо передаємо різні числа

class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return y !== 0 ? x / y : "Помилка ділення на нуль";
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); //4

// // ===========2===========
// // якщо передаємо однакові числа для всіх методів

// class Calculator {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   add() {
//     return this.x + this.y;
//   }

//   subtract() {
//     return this.x - this.y;
//   }

//   multiply() {
//     return this.x * this.y;
//   }

//   divide() {
//     return this.y !== 0 ? this.x / this.y : "Помилка ділення на нуль";
//   }
// }

// const calc = new Calculator(5, 3);

// console.log(calc.add());
// console.log(calc.subtract());
// console.log(calc.multiply());
// console.log(calc.divide());
