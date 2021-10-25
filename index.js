// Required variables and constants for the script
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create functions that will create the objects needed for the team
function createManager() {
    let name = Manager.getName();
    let id = Manager.getId()
    let email = Manager.getEmail();
    let github = Manager.getGithub();
    let role = Manager.getRole();

   return (new Manager(name, id, email, role, github));

}

function createEngineer() {
    let name = Engineer.getName();
    let id = Engineer.getId()
    let email = Engineer.getEmail();
    let github = Engineer.getGithub();
    let role = Engineer.getRole();

    return (new Engineer(name, id, email, role, github));

}

function createIntern() {
    let name = Intern.getName();
    let id = Intern.getId();
    let email = Intern.getEmail();
    let school = Intern.getSchool();
    let role = Intern.getRole();

    return (new Intern(name, id, email, role, school));

}

//
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

// Returns the ending of the html
function ifDone() {
    return("");
}

// Create a function that will initialize the script
function init() {

}