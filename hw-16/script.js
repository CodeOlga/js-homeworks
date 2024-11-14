"use strict";

function Student(firstName, lastName, birthYear, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = Array(25).fill(null); // array of fixed length - 25

  this.getStudentAge = () => new Date().getFullYear() - this.birthYear;

  this.getAverageGrade = () => {
    return this.grades.length > 0
      ? Math.round(
          this.grades.reduce((sum, grade) => sum + grade, 0) /
            this.grades.length
        )
      : 0;
  };

  this.addAttendance = (value) => {
    const index = this.attendance.findIndex((entry) => entry === null);
    if (index !== -1) {
      this.attendance[index] = value;
    } else {
      console.log("Ви досягли ліміту відвідуванності");
    }
  };

  this.present = () => this.addAttendance(true);

  this.absent = () => this.addAttendance(false);

  this.getAverageAttendance = () => {
    const attendedClasses = this.attendance.filter(
      (entry) => entry === true
    ).length;

    const totalClasses = this.attendance.filter(
      (entry) => entry !== null
    ).length;

    return totalClasses > 0 ? (attendedClasses / totalClasses).toFixed(1) : 0;
  };

  this.summary = () => {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageGrade <= 90 && averageAttendance <= 0.9) {
      return "Редиска!";
    } else {
      return "Добре, але можна краще";
    }
  };
}

const olga = new Student("Olga", "Krv", 1980, [98, 80, 100]);
const alex = new Student("Alex", "Shevchenko", 1998, [70, 60, 55]);

olga.present();
olga.present();
olga.absent();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();
olga.present();

// console.log(olga.getStudentAge());
// console.log(olga.getAverageGrade());
// console.log(olga.attendance);
// console.log(olga.getAverageAttendance());
// console.log(olga.summary());

//============
alex.present();
alex.present();
alex.absent();
alex.present();
alex.absent();
alex.absent();
alex.absent();

// console.log(alex.getStudentAge());
// console.log(alex.getAverageGrade());
// console.log(alex.attendance);
// console.log(alex.getAverageAttendance());
// console.log(alex.summary());
