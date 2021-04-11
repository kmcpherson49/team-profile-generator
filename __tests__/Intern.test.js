// name, id, email, getName(), getId(), getEmail(), getRole() overridden to return 'Intern', school, getSchool()

const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('school', () => {
    const testvalue = 'University of Arizona'
    const int = new Intern('Katie', 2, 'katie@gmail.com', testvalue);
    expect(int.school).toBe(testvalue);
})

test('return Intern', () => {
    const testvalue = 'Intern'
    const int = new Intern('Katie', 2, 'katie@gmail.com', 'University of Arizona');
    expect(int.getRole()).toBe(testvalue);
})
