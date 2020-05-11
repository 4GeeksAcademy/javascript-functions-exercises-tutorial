const rewire = require('rewire');
const fs = require('fs');
global.console.log = console.log = jest.fn((text) => null);


it('Declare a superduper variable', function () {
    
    const app = rewire('./app.js');
    const superduper = app.__get__("superduper");
    
    expect(superduper).toBeTruthy();
});

it('Superduper has to be equal to the sum of the two numbers', function () {

    const app = rewire('./app.js');
    const superduper = app.__get__("superduper")

    expect(superduper).toBe(3445324 + 53454423);
});

it('You have to call the function sum', function () {

    const regex =  /sum\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/03-What-is-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(match).toBeTruthy();

});


it('The function sum has to be called with the two values', function () {

    const regex =  /sum\s*\(\s*3445324\s*,\s*53454423\s*\)/gm;
    const fileContent = fs.readFileSync('./exercises/03-What-is-a-function/app.js');
    const match = regex.exec(fileContent);

    expect(match).toBeTruthy();
});

