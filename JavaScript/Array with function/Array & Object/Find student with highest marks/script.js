// Create a function that finds the student object with the highest marks from an array.

 function highestMarks(students){
    let highest = students[0];
    for(let i = 1; i<students.length; i++){

        if(students[i].marks > highest.marks){
            highest = students[i];

        }
    }
    return highest;
 }

const studentsData =[
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
// {name: 'Sakshi', marks: 100}  <== output 