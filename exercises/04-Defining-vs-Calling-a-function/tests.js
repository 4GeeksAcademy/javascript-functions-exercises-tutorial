const rewire = require('rewire');
const fs = require('fs');



it('Did you create a function named "multi"', () => {
    const app = rewire('./app.js');
    let multi = app.__get__("multi");
     expect(multi).toBeTruthy();
});

it('Did you create a function named "multi"', () => {
    const app = rewire('./app.js');
    let multi = app.__get__("multi");
     expect(typeof(multi)).toBe("function");
});

it('We tested the function for 3 and 6 and it did not returned 18', () => {

    const app = rewire('./app.js');
    let multi = app.__get__("multi");
    let solution = multi(3,6);

    expect(solution).toBe(18);

});

it('We tested the function for 4 and 12 and it did not returned 48', () => {

    const app = rewire('./app.js');
    let multi = app.__get__("multi");
    let solution = multi(4,12);

    expect(solution).toBe(48);

});

