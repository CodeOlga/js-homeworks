// HW 8.1

let ladder = {
  step: 0,

  up: function () {
    this.step++; // step += 1
    return this; //повертає весь об'єкт зі збільшеною сходинкою
  },

  down: function () {
    this.step--; // step -= 1
    return this; //повертає весь об'єкт зі зменшеною сходинкою
  },

  showStep: function () {
    console.log(this.step);
    return this; //повертає весь об'єкт з поточною сходинкою
  },
};

// ----1-----
// ladder.up();

// ladder.up();

// ladder.down();

// ladder.showStep();

// ----2-----
ladder.up().up().down().showStep();
