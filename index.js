// Required variables and constants for the script
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const theTeam = require("./src/template");

const newTeamMember = [];

const questions = async () => {
  const answers = await inquirer
    .prompt([
        {
        type: "list",
        message: "What is the role of the team member?",
        name: "role",
        choices: [ "Manager", "Engineer", "Intern"],

      },
      {
        type: "input",
        message: "What is the of the team members name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team member's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member's email?",
        name: "email",
      },
      
    ])

    if (answers.role === "Manager") {
        const managerOffice = await inquirer
          .prompt([
            {
              type: "input",
              message: "What the manager's office number?",
              name: "officeNumber",
            },
          ])

          const newManager = new Manager(

            answers.name,
            answers.id,
            answers.email,
            managerOffice.officeNumber
          );
          newTeamMember.push(newManager);

        } else if (answers.role === "Engineer") {
            const engineerGithub = await inquirer
              .prompt([
                {
                  type: "input",
                  message: "What the engineer's GitHub username?",
                  name: "github",
                }
              ])
                const newEngineer = new Engineer(
                  answers.name,
                  answers.id,
                  answers.email,
                  engineerGithub.github
                );
                newTeamMember.push(newEngineer);

            } else if (answers.role === "Intern") {
                const internSchool = await inquirer
                  .prompt([
                    {
                      type: "input",
                      message: "What university does the intern go to?",
                      name: "school",
                    },
                  ])
                  
                  const newIntern = new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    internSchool.school
                  );
                  newTeamMember.push(newIntern); 

                } 
            }; 

            async function promptQuestions() {
                await questions()
                  
                const addOrCreate = await inquirer
                  .prompt([
                    {
                      name:'addMember',
                      type: 'list',
                      choices: ['Add a new member', 'Finish creating your team'],
                      message: "What would you like to do next?"
                    }
                  ])
              
                  if (addOrCreate.addMember === 'Add a new member') {
                    return promptQuestions()
                  }
                  return createTeam();
              }  
              
              promptQuestions();
              function createTeam () {
                fs.writeFileSync("./dist/index.html",theTeam(newTeamMember), "utf-8" );
              }