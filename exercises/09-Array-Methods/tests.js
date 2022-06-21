const rewire = require('rewire');
const fs = require('fs');

test('The Function `sortNames` should exist', () => { 
    const app = rewire('./app.js');
    const sortNames = app.__get__('sortNames');
    expect(sortNames).toBeTruthy()

 })
 test("Function sortNames should return something", function(){
    const file = rewire("./app.js");
    const list = ['Jhon','Lucas']
    const sortNames = file.__get__('sortNames');
    expect(sortNames(list)).toBeTruthy()
  });

test('The function should return an array', () => { 
    const file = rewire('./app.js')
    const sortNames = file.__get__('sortNames')
    let arr = ['sadiel','james','saikel'];
    expect(Array.isArray(sortNames(arr))).toBe(true)
 })

test('The function should use the sort method to sort the arrays', () => {
    const fileContent = fs.readFileSync('./exercises/09-Array-Methods/app.js');
    const regex = /\w+\.sort\(/gm;
    expect(regex.exec(fileContent)).toBeTruthy();
})

test('The function should sort the array and then return the array sorted.', () => {
    const file = rewire("./app.js");
    const sortNames = file.__get__('sortNames');
    let names = ['Tomas', 'Alejandro', 'Jake', "Mark"];
    let sortedNames = ['Alejandro', 'Jake', 'Mark', 'Tomas'];
    expect(sortNames(names)).toEqual(sortedNames);
});

test('The function should sort the array and then return the array sorted. testing with a different array', () => {
    const file = rewire("./app.js");
    const sortNames = file.__get__('sortNames');
    let names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];
    let sortedNames = ['Bob', 'Dilan', 'John', 'Kenny', 'Tom'];
    expect(sortNames(names)).toEqual(sortedNames);
});
