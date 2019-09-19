const rewire = require('rewire');
const fs = require('fs');


it('Did you return using the parameter with the correct SORTING method??', () => {
   const regex = /return\s*\w+.sort\(\)/gm;
   const fileContent = fs.readFileSync('./exercises/10-Array-Methods/app.js');
    const match = regex.exec(fileContent);

    expect(match).toBeTruthy();
});






