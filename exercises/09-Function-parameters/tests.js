const rewire = require('rewire');
const fs = require('fs');
const path = require('path');
global.console.log = console.log = jest.fn((text) => null);
const fileContent = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
const renderPerson = rewire('./app.js').__get__('renderPerson');

it("The function 'renderPerson' must exist" , function () {
    expect(renderPerson).toBeTruthy();
});

it("The function 'renderPerson' should return something" , function () {
    expect(renderPerson()).toBeTruthy();
});

it("The function 'renderPerson' should return the expected output. Tesing with Bob" , function () {
    expect(renderPerson('Bob', '05/22/1983', 'green', 23, 'male')).toBe("Bob is a 23 years old male born in 05/22/1983 with green eyes")
});

it("The function 'renderPerson' should return the expected output. Tesing with Katherine" , function () {
    expect(renderPerson('Katherine', '06/05/2004', 'green', 17, 'female')).toBe("Katherine is a 17 years old female born in 06/05/2004 with green eyes")
});

it("Print the function 'renderPerson' in console to see the result" , function () {
    require("./app.js");
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log).toHaveBeenCalledWith("Bob is a 23 years old male born in 05/22/1983 with green eyes");
});


