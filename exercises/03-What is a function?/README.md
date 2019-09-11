#What is functions?

You can see a function as a fragment of code that you encapsulate between curly brackets to be able to use it several times in your code. 

For example, if we want to get the sum of two numbers, we can declare a function called "sum" that returns the sum of number1 and number2:

function sum(number1,number2) {
  return number1 + number2;
}
 
After the function is declared we can use it as many times as we want, like this:

var total = sum(2,3);
var total2 = sum(5,10);
var total3 = sum(2,3);

Instructions
Please calculate the sum between 3445324 and 53454423 and assign the result to a variable called "superduper"