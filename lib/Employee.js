//
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
} 

//
getName(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Employees name?',
            name: 'employeeName',
        },
    ])
    .then(function(answer){
        return answer.employeeName;
    });
}

getId() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the employees ID?',
            name: 'employeeID',
        },
    ])
    .then(function(answer){
        return answer.employeeID;
    });
}

getEmail() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the employees email?',
            name: 'employeeEmail',
        },
    ])
    .then(function(answer){
        return answer.employeeEmail;
    });
}

// Sets the role to employee until which type of employee is made clear
getRole() {return "Employee"}

}

module.exports = Employee;
