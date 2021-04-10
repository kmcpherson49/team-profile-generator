// name, id, email, getName(), getId(), getEmail(), getRole() overridden to return 'Engineer', github, getGithub()

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;