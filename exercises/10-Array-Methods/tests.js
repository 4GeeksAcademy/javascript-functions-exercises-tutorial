const rewire = require('rewire');
const fs = require('fs');

test('The function should sort the array and then return the array sorted.', () => {
    const file = rewire("./app.js");
    const sortNames = file.__get__('sortNames');
    let names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];
    let sortedNames = ['Bob', 'Dilan', 'John', 'Kenny', 'Tom'];
    expect(sortNames(names)).toEqual(sortedNames);
});