// Create a function that finds the student object with the highest marks from an array.

 function highestMarks(students){
    let top = students[0]; //first

    for(let s of students){
        if(s.marks > top.marks){
            top = s;
        }
    }

    return top;
}

let studentsData =[
    { name: "Aman", marks: 78 },
    { name: "Riya", marks: 88 },
    { name: "Priya", marks: 98 },
    { name: "siya", marks: 99 },
    { name: "Sakshi", marks: 100 },
    { name: "Vishali", marks: 80 },
    { name: "Arnav", marks: 95 },
    { name: "Priyank", marks: 94 },

    { name: "Dirshti", marks: 92 },
    { name: "Mushkan", marks: 91 },
    { name: "rakhi", marks: 90 }, 

]

console.log(highestMarks(studentsData));