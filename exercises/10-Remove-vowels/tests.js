const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

it('Declare an arrow function called "rapid"', function () {
    const app = rewire('./app.js');
    let rapid = app.__get__("rapid");
    const regex = /const\s*rapid\s*=\s*\(?\s*(\w+)\s*\)?\s*=>/gm;
    const fileContent = fs.readFileSync('./exercises/10-Remove-vowels/app.js');
    const match = regex.exec(fileContent);

    expect(match).toBeTruthy();
    expect(rapid).toBeTruthy();
});

it('Create a for loop that iterates through the string and removes the vowels', function () {
    const regex = /for\s*/gm;
    const fileContent = fs.readFileSync('./exercises/10-Remove-vowels/app.js');
    const match = regex.exec(fileContent);

    expect(match).toBeTruthy();
});

it('console.log() function should be called with the string "JHN"', function () {
    //then I import the index.js (which should have the alert() call inside)
    const file = require("./app.js");
    const str = 'JHN';

    //Expect the console log to have been called with "Hello World" at least one
    expect(console.log).toHaveBeenCalledWith('JHN');
    //and I expect the console.log to be already called just one time.
    // expect(console.log.mock.calls.length).toBe(2);

    //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
    //expect(_buffer).toBe("Compare with the entire function buffer out");
});

