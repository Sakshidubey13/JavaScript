// Create a function that takes an array of student objects and returns only the names.
function getStudentNames(student) {
    let names = [];

    for (let s of students) {
        names.push(s.name);
    }

    return names;


}

let students = [
    {     name: "Yashika", age: 18 , std : 12 },
    { name: "Sakshi", age: 19 , std : 11 },
]


console.log(getStudentNames(students));
// console.log(getStudentage(students));
