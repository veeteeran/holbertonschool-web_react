const { Seq } = require('immutable');

const printBestStudents = (object) => {
  const students = Seq(object)
    .filter((x) => x.score >= 70)
    .map(
      (x) => ({
        score: x.score,
        firstName: x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1),
        lastName: x.lastName.charAt(0).toUpperCase() + x.lastName.slice(1),
      }),
    );

  console.log(students.toObject());
};

module.exports = printBestStudents;

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
};

printBestStudents(grades);
