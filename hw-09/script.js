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

function sumSalaries(departments) {
  let total = 0;
  // перебираемо головний об'єкт company і знаходимо ключ sales
  for (let key in departments) {
    const value = departments[key]; // value = sales

    // перевіряємо масивом чи об'єктом внутрішні значення
    if (Array.isArray(value)) {
      // якщо масив - перебираємо элементи масива (два об'єкти(item) по черзі)
      for (let employee of value) {
        total += employee.salary || 0; // в кожному об'єкті(item) шукаємо ключ salary, якщо він є - додаємо зарплату
      }
      // якщо об'єкт та не null (typeof null буде також "object")
    } else if (typeof value === "object" && value !== null) {
      total += sumSalaries(value); // рекурсивно обробляємо вкладений об'єкт
    }
  }

  return total;
}

const totalSalary = sumSalaries(company);
console.log(`The total salary of all company employees is ${totalSalary}`);
