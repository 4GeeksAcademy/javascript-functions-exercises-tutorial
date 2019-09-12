
// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer

global.console.log = console.log = jest.fn((text) => null);

it('Call console.log one time', function () {
    require("./app.js");
    expect(console.log.mock.calls.length).toBe(1);
});


it('console.log() function should be called with Hello World', function () {
    require("./app.js");
    expect(console.log).toHaveBeenCalledWith("Hello World");
});