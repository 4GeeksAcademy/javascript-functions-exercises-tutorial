const rewire = require('rewire');
const fs = require('fs');



it('Did you declare an arrow function and save it to constant named rapid?', function () {

    const app = rewire('./app.js');
    let rapid = app.__get__("rapid");
   const regex = /const\s*rapid\s*=\s*\(\s*(\w+)\s*\)\s*=>/gm;
   const fileContent = fs.readFileSync('./exercises/07-Arrow-Functions/app.js');
    const match = regex.exec(fileContent);

    expect(match).toBeTruthy();
    expect(rapid).toBeTruthy();

});


it('Did you create a for loop to iterate through the string and remove the vowels?', function () {

   const regex = /for\s*/gm;
   const fileContent = fs.readFileSync('./exercises/07-Arrow-Functions/app.js');
    const match = regex.exec(fileContent);

    expect(match).toBeTruthy();


});
it('The console.log(rapid(str) should output "JHN" ', function () {

    const app = rewire('./app.js');
    let rapid = app.__get__("rapid(str)");


    expect(rapid).toBe("JHN");

});

