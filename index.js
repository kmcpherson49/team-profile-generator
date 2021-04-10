const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page_template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const teamInfo = [];

const appMenu = () => {
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
            message: "What is your employee id number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your employee email?",
        },
        {
            type: "input",
            name: "officenumber",
            message: "What is your office number?",
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.managerid, answers.email, answers.officenumber);
        teamInfo.push(manager);
       // buildTeam()
    })
}
promptManager();
}

appMenu();
