//
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Engineers GitHub?',
                name: 'github',
            },
        ])
        .then((data => {
        writeToFile(fileName, data);
        }))
    }

    getRole() {return "Engineer"}

}