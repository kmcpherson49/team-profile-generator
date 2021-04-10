// name, id, email, getName(), getId(), getEmail(), getRole() overridden to return 'Intern', school, getSchool()

class Intern {
    constructor(name = ''){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        
    }
}

module.exports = Intern;