const student=[
    {id:101 , name:"Sony"},
    {id:102 , name:"Katsumi"},
    {id:103 , name:"Jeje"}
]

const names=student.map(s=>s.name);
console.log(names);
const ids=student.map(s=>s.id);
console.log(ids);
const bigger=student.find(s=>s.id>101);
const biggerOne=student.filter(s=>s.id>102);
console.log(bigger);
console.log(biggerOne);