//
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, ) {
        super(name, id, email, role);
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
        .then(function(answer){
            return answer.officeNum;
        });
    }

    getRole() {return "Manager"}

}

module.exports = Manager;
