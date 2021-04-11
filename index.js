const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page_template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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
    })
}
const moreEmployee = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "addemployee",
            message: "Would you like to add another employee?"
        }
    ]); .then (answers => {
        if (true) {
        return addOther();
    }
}}

const addOther = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "choosetype",
            message: "Which type of employee would you like to add?",
            choices: ['Engineer', 'Intern']
        }
    ]); 
}
promptManager();
}

appMenu();
