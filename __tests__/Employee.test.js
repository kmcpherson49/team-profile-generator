// The first class is an Employee parent class with the following properties and methods:
// name, id, email, getName(), getId(), getEmail(), getRole() returns 'Employee'

const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('start employee instance', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
})

test('can set name', () => {
    const name = 'Sam';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
})