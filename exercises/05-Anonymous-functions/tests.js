const fs = require('fs');
const rewire = require('rewire');
global.console.log = console.log = jest.fn(text => null);

it('The function multy must exist ', () => {
    const app = rewire('./app.js');
    const multy = app.__get__('multy');
    expect(multy).toBeTruthy();
})

it('Call the console.log function once', function () {
    const app = require('./app.js');
     expect(console.log).toHaveBeenCalledTimes(1);
});

it('The console.log output does not match what we expected', function () {
    const app = require('./app.js');
    expect(console.log).toHaveBeenCalledWith(324234 * 47);
});


it('The function should multiply the two arguments [testing with 3 & 6 ] ', function () {
    const multy = rewire ('./app.js').__get__("multy");
    let solution = multy(3,6);
    expect(solution).toBe(18);
});


it('The function should multiply the two arguments [testing with 50 & 200]', function () {
    const multy = rewire ('./app.js').__get__("multy");
    let solution = multy(50,200);
    expect(solution).toBe(10000);
});

it('Did you called the function multy with the two parameters?', () => {
    const regex = /multy\s*\(\s*324234\s*,\s*47\s*\)/gm;
    const fileContent = fs.readFileSync('./exercises/05-Anonymous-functions/app.js');
    const match = regex.exec(fileContent);
    expect(match).toEqual(expect.anything());
});



