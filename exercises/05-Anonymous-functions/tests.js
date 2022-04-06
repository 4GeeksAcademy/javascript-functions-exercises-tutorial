const fs = require('fs');
const rewire = require('rewire');
global.console.log = console.log = jest.fn(text => null);
it('Call the console.log function once', function () {
    const app = require('./app.js');
     expect(console.log).toHaveBeenCalledTimes(1);
});
it('The console.log output does not match what we expected', function () {
    const app = require('./app.js');
    expect(console.log).toHaveBeenCalledWith(324234 * 47);
});
it('Did you called the function multy with the two parameters?', () => {
    const regex = /multy\s*\(\s*324234\s*,\s*47\s*\)/gm;
    const fileContent = fs.readFileSync('./exercises/06-Anonymous-functions/app.js');
    const match = regex.exec(fileContent);
    expect(match).toEqual(expect.anything());
});
