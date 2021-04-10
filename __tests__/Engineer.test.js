// name, id, email, getName(), getId(), getEmail(), getRole() overridden to return 'Engineer', github, getGithub()

const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('can set github account via constructor', () => {
    const testvalue = 'kmcpherson49'
    const eng = new Engineer('Mike', 1, 'mike@gmail.com', testvalue);
    expect(eng.github).toBe(testvalue);
})

test('getRole should return Engineer', () => {
    const testvalue = 'Engineer'
    const eng = new Engineer('Mike', 1, 'mike@gmail.com', 'kmcoherson49');
    expect(eng.getRole()).toBe(testvalue);
})