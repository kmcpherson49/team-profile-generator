const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page_template.js');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamInfo = [];

const addMenu = () => {
    const promptManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "managerid",
                message: "What is their employee id number?",
            },
            {
                type: "input",
                name: "email",
                message: "What is their employee email?",
            },
            {
                type: "input",
                name: "officenumber",
                message: "What is their office number?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.managerid, answers.email, answers.officenumber);
            teamInfo.push(manager);
            // buildTeam()
            return (moreEmployee());
        }) 
    }
    const moreEmployee = () => {
        inquirer.prompt([
            {
                type: "confirm",
                name: "addemployee",
                message: "Would you like to add another employee?",
            }
        ]).then(answers => {
            if (true) {
                return addOther();
            }
        })
    }

    const addOther = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "choosetype",
                message: "Which type of employee would you like to add?",
                choices: ['Engineer', 'Intern']
            }
        ]).then(answers => {
            if (answers.choices[0]) {
                return addEngineer();
            } else {
                return addIntern();
            }
        })
    }

    const addEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "engineerid",
                message: "What is their employee id number?",
            },
            {
                type: "input",
                name: "email",
                message: "What is their employee email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is their github username?"
            }
        ]) .then(answers => {
            const engineer = new Engineer(answers.name, answers.engineerid, answers.email, answers.github);
            teamInfo.push(engineer);
        })
    }

    const addIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "internid",
                message: "What is their employee id number?",
            },
            {
                type: "input",
                name: "email",
                message: "What is their employee email?",
            },
            {
                type: "input",
                name: "school",
                message: "What school do they attend?"
            }
        ]) .then(answers => {
            const intern = new Intern(answers.name, answers.internid, answers.email, answers.school);
            teamInfo.push(intern);
        })
    }
    promptManager();
    //moreEmployee();
}

function init() {
    inquirer
    .prompt(
        addMenu
    )
    .then(answers => {
        fs.writeFileSync("team-profile.html", generatePage(answers));
    })
}

addMenu();
