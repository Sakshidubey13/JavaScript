// Create a function that takes an array of student objects and returns only the names.

function getStudentNames(student){
    let result = [];

    for(let i = 0 ; i < student.length; i++){
        result.push(student[i].name);
        // result.push(student[i].age);
    }
    return result;

}

const student = [
    {name : "Aarya", age : 22},
    { name: "Sakshi", age: 20 },
    { name: "Riya", age: 19 },
    { name: "Priya ", age: 17 },

];

console.log(getStudentNames(student));