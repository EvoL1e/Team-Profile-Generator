//
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    .then((data => {
        writeToFile(fileName, data);
    }))
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
    .then((data => {
        writeToFile(fileName, data);
    }))
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
    .then((data => {
        writeToFile(fileName, data);
    }))
}

// Sets the role to employee until which type of employee is made clear
getRole() {return "Employee"}

}