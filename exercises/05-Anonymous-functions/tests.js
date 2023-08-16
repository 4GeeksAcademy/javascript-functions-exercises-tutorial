const fs = require('fs');
const rewire = require('rewire');
global.console.log = console.log = jest.fn(text => null);

it('The function multi must exist ', () => {
    const app = rewire('./app.js');
    const multi = app.__get__('multi');
    expect(multi).toBeTruthy();
})

it('Call the console.log function once', function () {
    const app = require('./app.js');
     expect(console.log).toHaveBeenCalledTimes(1);
});

it('The console.log output does not match what we expected', function () {
    const app = require('./app.js');
    expect(console.log).toHaveBeenCalledWith(324234 * 47);
});


it('The function should multiply the two arguments [testing with 3, 6 ]', function () {
    const multi = rewire ('./app.js').__get__("multi");
    let solution = multi(3,6);
    expect(solution).toBe(18);
});


it('The function should multiply the two arguments [testing with 50, 200]', function () {
    const multi = rewire ('./app.js').__get__("multi");
    let solution = multi(50,200);
    expect(solution).toBe(10000);
});

it('Did you call the function multi with the two parameters?', () => {
    const regex = /multi\s*\(\s*324234\s*,\s*47\s*\)/gm;
    const fileContent = fs.readFileSync('./exercises/05-Anonymous-functions/app.js');
    const match = regex.exec(fileContent);
    expect(match).toEqual(expect.anything());
});
