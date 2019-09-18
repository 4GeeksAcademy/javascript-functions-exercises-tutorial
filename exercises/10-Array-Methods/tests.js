const rewire = require('rewire');
const fs = require('fs');


it('Did you return using the parameter with the correct SORTING method??', () => {
   const regex = /return\s*arr.sort\(\);/gm;
   const fileContent = fs.readFileSync('./exercises/10-Array-Methods/app.js');
    const match = regex.exec(fileContent);
    const app = rewire('./app.js');
    const logs = app.__get__("sortNames(names)")

    // console.log("Alphabetical Sorting: ", logs );

    expect(match).toBeTruthy();
});






