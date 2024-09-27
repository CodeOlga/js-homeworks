// HW 3.1

// primitive data types
const userName = "Olga";
const userAge = 18;
const isStudent = true;
const failedHW = null;
let points;
const studentId = Symbol("description");
const bigNumber = 111222223333334444444455555556666n;

console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof isStudent);
console.log(typeof failedHW);
console.log(typeof points);
console.log(typeof studentId);
console.log(typeof bigNumber);

// reference data types (objects)

const user = {
  name: "Olga",
  age: 18,
  isStudent: true,
};

const completedHW = [1, 2, 3, 4, 5];

console.log(typeof user);
console.log(typeof completedHW);
console.log(Array.isArray(completedHW));
