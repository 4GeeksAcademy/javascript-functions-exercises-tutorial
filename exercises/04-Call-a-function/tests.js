const rewire = require('rewire');
const fs = require('fs');



it('Declare a squareArea variable', function () {

    const app = rewire('./app.js');
    const squareArea = app.__get__("squareArea");


    expect(squareArea).toEqual(expect.anything());
});


it('You have to call the function calculateArea three times with the different area parameters', function () {

    const regex =  /squareArea\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/04-Call-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(match).toHaveBeenCalledTimes(3);

});

it('Call the calculateArea function with the correct parameters', function () {

    const app = rewire('./app.js');
    const squareArea = app.__get__("squareArea");
    console.log("SquareArea", squareArea);

    expect(squareArea).toBe(4 * 4);
    expect(squareArea).toBe(2 * 2);
    expect(squareArea).toBe(5 * 5);

});

it('The function calculateArea has to be called with the two values', function () {

    const regex = /squareArea\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/04-Call-a-function/app.js');
    const match = regex.exec(fileContent);


    expect(parseInt(match[1],10)).toBeTruthy();
    expect(parseInt(match[2],10)).toBeTruthy();
});

