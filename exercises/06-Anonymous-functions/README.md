An anonymous function is a function without a name, for example:

function(param1, param2)
{
    return param1 * param2;
}

See how it is missing a name? Probably you are wondering: How do I call this function if it doesn't have a name?

Anonymous functions need to be stored within a variable in order to be able to use them. For example: 

var myFirstVar = function(param1, param2)
{
    return param1 * param2;
}

Then, I can call my function like this:

var result = myFirstVar(2,3);

Instructions
Print on the console, the result of using the function multy to calculate the multiplication between 324234 and 47