const fs = require('fs');
const path = require('path');
const rewire = require('rewire');
const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');


it('Did you declare an arrow function and save it to constant named rapid?', function () {
    const app = rewire('./app.js');

    let rapid = app.__get__("rapid");

    const regex = /const\s*rapid\s*=\s*\(?\s*(\w+)\s*\)?\s*=>/gm;
    const match = regex.test(file.toString())

    expect(match).toBeTruthy();
    expect(rapid).toBeTruthy();
});


it('Did you create a for loop to iterate through the string and remove the vowels?', function () {
    const regex = /for\s*/gm;
    const match = regex.test(file.toString())

    expect(match).toBeTruthy();
});
it('The console.log(rapid(str) should output "JHN" ', function () {
    const app = rewire('./app.js');
    let rapid = app.__get__("rapid(str)");


    expect(rapid).toBe("JHN");
});

