Functions are blocks of code that you save to be (re)used later; that specific fragment of code has a predefined purpose and it does a defined task. A function could receive some or no parameters to be able to execute and must always return. For example: a function that calculates the area of a square will be something like this:

function calculateArea(length, edge)
{
    return length * edge;
}

If you want to use that function to calculate the area of a square with 
length = 3
edge = 6
you need to do something like this:

var squareArea = calculateArea(3,6);

The value of squareArea will be set to 18"

Exercise:

Using the squareArea function, print on the console the area of the following figures:

Hint:

Call the squareArea function 3 times, one per each square, passing the length and edge of each square.

Click here to learn more about functions: http://www.mathopenref.com/functionsprog.html