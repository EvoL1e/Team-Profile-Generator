// Required variables and constants for the script
import { initialHTML, managerHTML, engineerHTML, internHTML, closingHTML } from './src/page';
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create functions that will create the objects needed for the team
function createManager() {
    console.log("You will now be asked some questions about the manager you want on the team");
    
    let name = Manager.getName();
    let id = Manager.getId()
    let email = Manager.getEmail();
    let github = Manager.getGithub();
    let role = Manager.getRole();

   return (new Manager(name, id, email, role, github));

}

function createEngineer() {
    console.log("You will now be asked some questions about the Engineer you want on the team");
    
    let name = Engineer.getName();
    let id = Engineer.getId()
    let email = Engineer.getEmail();
    let github = Engineer.getGithub();
    let role = Engineer.getRole();

    return (new Engineer(name, id, email, role, github));

}

function createIntern() {
    console.log("You will now be asked some questions about the intern you want on the team");
    
    let name = Intern.getName();
    let id = Intern.getId();
    let email = Intern.getEmail();
    let school = Intern.getSchool();
    let role = Intern.getRole();

    return (new Intern(name, id, email, role, school));

}

// To be used to create another Engineer/Intern and to get out of the loop
function whichTypeEmployee () {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add another intern/engineer or are you done?',
                name: 'employeeType',
                choices: ['Engineer', 'Intern', 'Done'],
            },
        ])
        .then(function(answer){
            return answer.employeeType;
        });
}

function teamDone() {
    return closingHTML();
}

function createHTML(fileName, data) {
    fs.writeFileSync(fileName, data, () =>
     console.log('HTML file created!'));
}

function init() {
    let appendHTML;
    let choice;
    let file = "./dist/index.html";
    appendHTML.concat(initialHTML());

    let manager = createManager();
    appendHTML.concat(managerHTML(manager));

    while(choice === !'Done') {
        choice = whichTypeEmployee()
        if(choice === 'Engineer') {
            let Engineer = createEngineer();
            appendHTML.concat(engineerHTML(Engineer));
        }
        if(choice === 'Intern') {
            let Intern = createIntern();
            appendHTML.concat(internHTML(Intern));
        }
    }

    appendHTML.concat(teamDone());

    createHTML(file, appendHTML);
}

init();