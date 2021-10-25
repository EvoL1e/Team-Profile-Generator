//
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, ) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the managers office number?',
                name: 'officeNum',
            },
        ])
        .then((data => {
        writeToFile(fileName, data);
        }))
    }

    getRole() {return "Manager"}

}