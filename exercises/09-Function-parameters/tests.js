const rewire = require('rewire');
const fs = require('fs');



it('Did you create a function named "renderPerson" that expects five parameters?', () => {

    const regex = /function\s*renderPerson\s*\(\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*\)/gm;
    const fileContent = fs.readFileSync('./exercises/09-Function-parameters/app.js');
    const match = regex.exec(fileContent);

     expect(match).toBeTruthy();

});
global.console.log = console.log = jest.fn((text) => null);

it('Did you use console.log?', function () {
    require("./app.js");
    expect(console.log.mock.calls.length).toBe(1);
});

it('Did you return the parameters in the correct concatenation?', () => {
   expect(console.log).toHaveBeenCalledWith("Bob is a 23 years old male born in 05/22/1983 with green eyes");
});

