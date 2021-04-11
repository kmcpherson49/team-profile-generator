// name, id, email, getName(), getId(), getEmail(), getRole() overridden to return 'Engineer', github, getGithub()

const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('set github username', () => {
    const testvalue = 'mikesmithdev'
    const eng = new Engineer('Mike', 1, 'mike@gmail.com', testvalue);
    expect(eng.github).toBe(testvalue);
})

test('return Engineer', () => {
    const testvalue = 'Engineer'
    const eng = new Engineer('Mike', 1, 'mike@gmail.com', 'mikesmithdev');
    expect(eng.getRole()).toBe(testvalue);
})
