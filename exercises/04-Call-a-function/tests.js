const rewire = require('rewire');
const fs = require('fs');



it('Declare a squareArea variable for each call ex. squareArea1, squareArea2...', function () {

    const app = rewire('./app.js');
    let squareArea1 = app.__get__("squareArea1");
    let squareArea2 = app.__get__("squareArea2");
    let squareArea3 = app.__get__("squareArea3");


    expect(squareArea1).toBeTruthy();
    expect(squareArea2).toBeTruthy();
    expect(squareArea3).toBeTruthy();
});


it('You have to call the function calculateArea three times with the different area parameters', function () {

    const regex1 =  /squareArea1\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const regex2 =  /squareArea2\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const regex3 =  /squareArea3\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/04-Call-a-function/app.js');
    const match1 = regex1.exec(fileContent);
    const match2 = regex2.exec(fileContent);
    const match3 = regex3.exec(fileContent);

    expect(parseInt(match1[1],10)).toBe(4);
    expect(parseInt(match1[2],10)).toBe(4);
    expect(parseInt(match2[1],10)).toBe(2);
    expect(parseInt(match2[2],10)).toBe(2);
    expect(parseInt(match3[1],10)).toBe(5);
    expect(parseInt(match3[2],10)).toBe(5);


});

it('Call the calculateArea function with the correct parameters', function () {
    const app = rewire('./app.js');
    let squareArea1 = app.__get__("squareArea1");
    let squareArea2 = app.__get__("squareArea2");
    let squareArea3 = app.__get__("squareArea3");

    expect(squareArea1).toBe(4 * 4);
    expect(squareArea2).toBe(2 * 2);
    expect(squareArea3).toBe(5 * 5);
    console.log(`
    SquareArea1: ${squareArea1}
    SquareArea2: ${squareArea2}
    SquareArea3: ${squareArea3}
                 `);

});

it('The function calculateArea has to be called with the two values', function () {

    const regex1 =  /squareArea1\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const regex2 =  /squareArea2\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const regex3 =  /squareArea3\s*=\s*calculateArea\s*\(\s*(\d+)\s*,\s*(\d+)\)/gm;
    const fileContent = fs.readFileSync('./exercises/04-Call-a-function/app.js');
    const match1 = regex1.exec(fileContent);
    const match2 = regex2.exec(fileContent);
    const match3 = regex3.exec(fileContent);


    expect(parseInt(match1[1],10)).toBeTruthy();
    expect(parseInt(match1[2],10)).toBeTruthy();
    expect(parseInt(match2[1],10)).toBeTruthy();
    expect(parseInt(match2[2],10)).toBeTruthy();
    expect(parseInt(match3[1],10)).toBeTruthy();
    expect(parseInt(match3[2],10)).toBeTruthy();
});

