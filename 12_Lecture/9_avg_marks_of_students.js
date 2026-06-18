//Q.9

const students_mark = [60, 80, 90, 70];

const averages = students_mark
.reduce((total, s1) => total += s1, 0)/students_mark.length;

console.log(averages);