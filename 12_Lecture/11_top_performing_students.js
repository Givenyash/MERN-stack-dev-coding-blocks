//Q.11

const students = [
    {
        name : "Utkarsh",
        marks : [80,90,85]
    },
    {
        name : "Yukta",
        marks : [95,92,98]
    },
    {
        name : "Navneet",
        marks : [60,70,65]
    }
];

//Tasks :
// Calculate avg marks
// Keep avg >= 85
// Return names sorted by avg descending

const topper = students
.map(student =>{
    const total = student.marks.reduce((sum,mark) => sum += mark,0);
    const avg = total / student.marks.length;
    return {name : student.name, avg};
})
.filter(student => student.avg >= 85)
.sort((a,b) => b.avg - a.avg)
.map(student => student.name);

console.log(topper);