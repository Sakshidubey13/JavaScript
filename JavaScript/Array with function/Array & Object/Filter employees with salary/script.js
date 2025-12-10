// Create a function that filters employee objects whose salary is above 30000.
function highestSalary(employees){
    let result = [];

    for(let i = 0; i<employees.length;i++){
        if(employees[i].salary>30000){
            result.push(employees[i]);
        }
    }
    return result;
}

const employees = [
    {name : "Amit", salary : 25000},
    { name: "Sraya", salary: 99000 },
    { name: "Rohan", salary: 15000 },
    { name: "Rohshan", salary: 20000 },
    { name: "Reshi", salary: 2000 },
    { name: "Ankit", salary: 28000 },
    { name: "Sardha", salary: 49000 },
    { name: "Arpit", salary: 26000 },
    { name: "kaielash", salary: 21000 }
]

console.log(highestSalary(employees));