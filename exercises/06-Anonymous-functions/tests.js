const fs = require('fs');
const rewire = require('rewire');

it('Did you call the anonymous function multy with the correct parameters inside a console.log()?', function () {

    const regex = /console.log\(\s*multy\s*\(\s*(\d+)\s*,\s*(\d+)\s*\s*\)\)/gm;
    const fileContent = fs.readFileSync('./exercises/06-Anonymous-functions/app.js');
    const match = regex.exec(fileContent);

    expect(parseInt(match[1],10)).toBe(324234);
    expect(parseInt(match[2],10)).toBe(47);
});

