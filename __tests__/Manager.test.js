// // name, id, email, getName(), getId(), getEmail(), getRole() Overridden to return 'Manager', officeNumber, 

const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('office number', () => {
    const testvalue = '3'
    const man = new Manager('Susan', 3, 'susan@gmail.com', testvalue);
    expect(man.officeNumber).toBe(testvalue);
})

test('return Manager', () => {
    const testvalue = 'Manager'
    const man = new Manager('Susan', 3, 'susan@gmail.com', 'Suite 3');
    expect(man.getRole()).toBe(testvalue);
})