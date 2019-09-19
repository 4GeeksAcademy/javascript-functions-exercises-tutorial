const rewire = require('rewire');
const fs = require('fs');

it('Declare a superduper variable', function () {

    const app = rewire('./app.js');
    const superduper = app.__get__("superduper");


    expect(superduper).toEqual(expect.anything());
});

it('Superduper has to be equal to the sum of the two numbers', function () {

    const app = rewire('./app.js');
    const superduper = app.__get__("superduper")

    console.log("Superduper", superduper );

    expect(superduper).toBe(3445324 + 53454423);
});

it('You have to call the function sum', function () {

    const regex =  /superduper\s*=\s*sum\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/03-What-is-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(match).toBeTruthy();

});


it('The function sum has to be called with the two values', function () {

    const regex =  /superduper\s*=\s*sum\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/03-What-is-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(parseInt(match[1],10)).toBe(3445324);
    expect(parseInt(match[2],10)).toBe(53454423);
});

it('Did you console.log superduper?', function () {

    const regex =  /console.log\(\s*superduper\s*\)/gm;
    const fileContent = fs.readFileSync('./exercises/03-What-is-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(match).toBeTruthy();

});
