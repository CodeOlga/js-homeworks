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
