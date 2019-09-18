const fs = require('fs');
const rewire = require('rewire');

global.console.log = console.log = jest.fn((text) => null);

it('Did you use console.log?', function () {
    require("./app.js");
    expect(console.log.mock.calls.length).toBe(1);
});


it('console.log() should be called with euroToYen and dollarToEuro with the correct parameter of 137?', function () {

  expect(console.log).toHaveBeenCalledWith(15137.609500000002);
//    console.log(euroToYen(dollarToEuro(137)));
});