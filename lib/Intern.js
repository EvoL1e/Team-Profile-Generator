//
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What school does this intern go to?',
                name: 'internSchool',
            },
        ])
        .then((data => {
        writeToFile(fileName, data);
        }))
    }

    getRole() {return "Intern"}

}