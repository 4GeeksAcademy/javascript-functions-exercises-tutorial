const rewire = require('rewire');
const fs = require('fs');



it('Did you create a function named "multi" that expects two parameters?', () => {

    const regex = /function\s*multi\s*\((\w+)\s*,\s*(\w+)\s*\)\s*{\s*return\s*\w+\s*\W+\s*\w+\W+\s*}/gm;
    const fileContent = fs.readFileSync('./exercises/05-Defining-vs-Calling-a-function/app.js');
    const match = regex.exec(fileContent);

     expect(match).toEqual(expect.anything());

});

it('Did you return the two parameters multiplied by each other?', () => {

    const app = rewire('./app.js');
    let returnValue = app.__get__("returnValue");

    expect(returnValue).toBe(376685484);

});

