const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// //===========1 спосіб===============
// function getTotalSalary(departments) {
//   let total = 0;
//   // перебираемо головний об'єкт company і знаходимо ключи departments
//   for (let key in departments) {
//     const value = departments[key]; // value може бути масивом чи об'єктом

//     // перевіряємо чи є value масивом
//     if (Array.isArray(value)) {
//       // якщо масив - перебираємо элементи масива (два об'єкти(employee) по черзі)
//       for (let employee of value) {
//         total += employee.salary || 0; // в кожному об'єкті(employee) шукаємо ключ salary, якщо він є - додаємо зарплату
//       }
//       // якщо об'єкт та не null (typeof null буде також "object")
//     } else if (typeof value === "object" && value !== null) {
//       total += getTotalSalary(value); // рекурсивно обробляємо вкладені об'єкти (departments)
//     }
//   }

//   return total;
// }

// const totalSalary = getTotalSalary(company);
// console.log(`The total salary of all company employees is ${totalSalary}`);

// //===========2 спосіб===============
// // Оптимізована функція без зовнішнього циклу
// function getTotalSalary(departments) {
//   // Якщо це масив, підраховуємо зарплату працівників
//   if (Array.isArray(departments)) {
//     return departments.reduce(
//       (total, employee) => total + (employee.salary || 0),
//       0
//     );
//   }

//   // Якщо це об'єкт, рекурсивно обробляємо вкладені департаменти
//   let total = 0;
//   for (let subDepartment in departments) {
//     total += getTotalSalary(departments[subDepartment]);
//   }

//   return total;
// }

// const totalSalary = getTotalSalary(company);
// console.log(`The total salary of all company employees is ${totalSalary}`);

//===========3 спосіб===============
function getTotalSalary(departments) {
  // Перевіряємо, чи є департамент (або піддепартамент) масивом
  return Array.isArray(departments)
    ? departments.reduce((totalSum, employee) => totalSum + employee.salary, 0)
    : Object.values(departments).reduce(
        (totalSum, subDepartment) => totalSum + getTotalSalary(subDepartment),
        0
      );
} //Object.values приймає об'єкт і повертає масив саме значень, не ключів

const totalSalary = getTotalSalary(company);
console.log(`The total salary of all company employees is ${totalSalary}`);
