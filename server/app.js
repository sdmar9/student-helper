Assessment = require('./javascript/Assessment.js');
Class = require('./javascript/Class.js');








var quiz = new Assessment("Quiz", 5, 5);
var assignment = new Assessment("Assignment", 5, 15);
var lab = new Assessment("Lab", 9, 10);
var exam = new Assessment("Exam", 1, 70);


var math = new Class([quiz, assignment, lab], 0.45);

console.log(math.totalMarks());
console.log(math.getMarksEarned());
console.log(math.getMarksAvailable());
console.log(math.getMarksRequired());
console.log(math.getPercentageRequired());

