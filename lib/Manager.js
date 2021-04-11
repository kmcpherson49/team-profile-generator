// name, id, email, getName(), getId(), getEmail(), getRole() Overridden to return 'Manager', officeNumber, 

const Employee = require("./Employee");

class Manager extends Employee {
        constructor(name, id, email, officeNumber){
            super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;