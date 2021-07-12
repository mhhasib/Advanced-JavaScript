
const students = [
    {id: '21', name: 'Omar Sunny'},
    {id: '31', name: 'Manna Vai'},
    {id: '41', name: 'Shakera'},
    {id: '71', name: 'Depjol the Don'}
]
console.log(students);


// 1. collect a new array from the object in classic way

const output = [];

for(i = 0; i<students.length; i++){
    const element = students[i];
    const wanted = element.name;

    output.push(wanted);
}
console.log(output);


// 2. collect a new array from the object  by map

// example - 1

const names = students.map( s => s.name);
console.log(names);

// example - 2

const ids = students.map( s => s.id);
console.log(ids);

