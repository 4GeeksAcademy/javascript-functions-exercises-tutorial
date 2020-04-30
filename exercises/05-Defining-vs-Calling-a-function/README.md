# `05` Defining vs Calling a function

Functions will only exists if you or somebody else defines them... is the only way the language compiler/interpreter knows they exist, therefore is able to run them when you call them.

To define a function we need to write this basic code formula:

```js
function myFunctionName(parameter, parameter2,... parameterX){
    //the function code here
    return something;
}
```

The word `function` is a reserved word in javascript, this means it is only used to define a function.

**The name** of the function could be anything you like. Tip: use a descriptive name (don't be cheap with words, use as many as you need) this way you will understand what the function does -and returns-.
Example names: addTwoIntegers , convertAStringIntoAnInteger , changeTheWorldUsingFrontEndDevelopment

**Parameters:** you can define as many parameters as you like, nay, need. The amount of parameters will depend on the operations done inside the function, I.E: if the function is adding two integers  (3 + 4)  this means the function will need two parameters (one for each integer).

**Scope:** All the operations that the function will do needs to be inside the `{` `}` (curly brackets), anything outside won't be considered as part of the function, this is called **the scope**, and it could be local (inside the function) and global (outside of the function).

**The Return**: not every function needs to return something, but it is recommended that it does.
Tip: `return;` is a good default for when you, still, doesn't know if you need to return something.

Example of a function:

```js
function concatenateNumberToString(localNumber, localString){
    let localVariable = localString+""+localNumber;
    return localVariable;
}
```


# 📝 Instructions:

1. Define a function called "multi".
2. Multi function receive two numbers
3. Return the result of the multiplication between them.

# 💡 Hint

Remember to add the "return" line, every function must return something, in this case it should be the result of the multiplication.
Don't forget the semi colon!
