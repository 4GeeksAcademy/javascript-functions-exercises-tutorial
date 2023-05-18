const fs = require('fs');
const path = require('path');
const rewire = require('rewire');
const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Declare an arrow function called "rapid"', function () {
    const app = rewire('./app.js');

    let rapid = app.__get__("rapid");
    const regex = /const\s*rapid\s*=\s*\(?\s*(\w+)\s*\)?\s*=>/gm;
    const match = regex.test(file.toString())

    expect(match).toBeTruthy();
    expect(rapid).toBeTruthy();
});

it('Did you create a for loop to iterate through the string and remove the vowels?', function () {
    const regex = /for\s*/gm;
    const match = regex.test(file.toString())

    expect(match).toBeTruthy();
});

it('rapid function should return only capitalize consonants of any given string', function () {
    //then I import the index.js (which should have the alert() call inside)
    const app = rewire('./app.js');

    let rapid = app.__get__("rapid");

    //Expect the console log to have been called with "Hello World" at least one
    expect(rapid("John")).toBe('JHN');
    expect(rapid("Wonderful")).toBe('WNDRFL');
});

