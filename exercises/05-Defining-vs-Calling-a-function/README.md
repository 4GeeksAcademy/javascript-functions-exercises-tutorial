Defining vs Calling a function
Functions will only exists if you or somebody else defines them... is the only way the language compiler/interpreter knows they exist, therefore is able to run them when you call them.

To define a function we need to write this basic code formula:

function myFunctionName(parameter, parameter2,... parameterX){
    
    //the function code here

    return something;
}

Notes:
The word function is a reserved word in javascript, this means it is only used to define a function or using an anonymous function (we'll get to anonymous functions later).
The name of the function could be anything you like. Tip: use a descriptive name (don't be cheap with words, use as many as you need) this way you will know faster what the function will do -and return-. Example names: addTwoIntegers , convertAStringIntoAnInteger , changeTheWorldUsingFrontEndDevelopment
Parameters: you can define as many parameters as you like, nay, need. The amount of parameters will depend on the operations done inside the function, I.E: if the function is adding two integers  (3 + 4)  this means the function will need two parameters (one for each integer).
All the operations that the function will do needs to be inside the { } (curly brackets), anything outside won't be considered as part of the function, this is called the scope, and it could be local (inside the function) and global (outside of the function).
The Return: not every function needs to return something, but it is recommended that it does. Tip: return; is a good default for when you, still, doesn't know if you need to return something.

Example of a fully functional function:

function concatenateNumberToString(localNumber, localString){ 
    
    var localVariable = localString+""+localNumber;
    
    return localVariable;
} 



Instructions
Define a function called "multi".
Multi function receive two numbers
Return the result of the multiplication between them.

Hint
Remember to add the "return" line, every function must return something, in this case it should be the result of the multiplication.