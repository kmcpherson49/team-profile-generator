// The first class is an Employee parent class with the following properties and methods:
// name, id, email, getName(), getId(), getEmail(), getRole() returns 'Employee'

const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('tests for new employee', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
})

test('set name', () => {
    const name = 'Sam';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
})

test('set id', () => {
    const id = 1;
    const name = 'Sam';
    const emp = new Employee(name, id);
    expect(emp.id).toBe(id);
})

test('add email', () => {
    const email = 'sam@gmail.com';
    const id = 1;
    const name = 'Sam';
    const emp = new Employee(name, id, email);
    expect(emp.email).toBe(email);
})
