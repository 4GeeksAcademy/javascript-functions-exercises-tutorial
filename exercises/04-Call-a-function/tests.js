const rewire = require('rewire');
const fs = require('fs');






it('You have to call the function calculateArea inside a console.log three times with different parameters', function () {

    const regex = /console.log\(calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)\);/gm;
    const fileContent = fs.readFileSync('./exercises/04-Call-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(match).toHaveBeenCalledTimes(3);

});

it('Call the calculateArea function with the correct parameters', function () {

    const app = rewire('./app.js');
    const calculateArea = app.__get__("calculateArea");
    console.log("calculateArea", calculateArea);

    expect(calculateArea).toBe(4 * 4);
    expect(calculateArea).toBe(2 * 2);
    expect(calculateArea).toBe(5 * 5);

});

it('The function calculateArea has to be called with the two values', function () {

    const regex = /console.log\(calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)\);/gm;
    const fileContent = fs.readFileSync('./exercises/04-Call-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(parseInt(match[1],10)).toBeTruthy();
    expect(parseInt(match[2],10)).toBeTruthy();
});

// it('console.log() function should be called with Hello World', function () {
//     require("./app.js");
//     expect(console.log).toHaveBeenCalledWith("Hello World");
// });