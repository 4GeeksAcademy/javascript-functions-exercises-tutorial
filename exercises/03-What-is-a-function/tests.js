const rewire = require('rewire');
const fs = require('fs');

it('Declare a superduper variable', function () {

    const app = rewire('./app.js');
    const superduper = app.__get__("superduper")

    //Expect the console log to have been called with "Hello World" at least one
    expect(superduper).toEqual(expect.anything());
});

it('Superduper has to be equal to the sum of the two numbers', function () {

    const app = rewire('./app.js');
    const superduper = app.__get__("superduper")

    console.log("Superduper", superduper );
    //Expect the console log to have been called with "Hello World" at least one
    expect(superduper).toBe(3445324 + 53454423);
});

it('You have to call the function sum', function () {

    const regex = /sum\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/03-What-is-a-function/app.js');
    const match = regex.exec(fileContent);

    //Expect the console log to have been called with "Hello World" at least one
    expect(match).toBeTruthy();

});


it('The function sum has to be called with the two values', function () {

    const regex = /sum\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/03-What-is-a-function/app.js');
    const match = regex.exec(fileContent);

    //Expect the console log to have been called with "Hello World" at least one
    expect(match[1]).toBe(3445324);
    expect(match[2]).toBe(53454423);
});
