//Q.7

const employees = [
  { name: "A", salary: 30000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 40000 }
];

const totalSalary = employees
.reduce( (total, person) => total += person.salary, 0);

console.log(totalSalary);