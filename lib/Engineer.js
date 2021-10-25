//
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, role);
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
        .then(function(answer){
            return answer.github;
        });
    }

    getRole() {return "Engineer"}

}

module.exports = Engineer;
