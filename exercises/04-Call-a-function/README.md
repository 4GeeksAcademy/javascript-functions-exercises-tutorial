# `04` Calling a function

Functions are blocks of code that you save to be (re)used later; that specific fragment of code has a predefined purpose and it does a defined task. A function could receive some or no parameters to be able to execute and must always return.

For example: a function that calculates the area of a square will be something like this:

```js
function calculateArea(length, edge) {
    return length * edge;
}
```

If you want to use that function to calculate the area of a square with

```
length = 3
edge = 6
```

You need to do something like this:
```js
let squareArea = calculateArea(3,6);
```
The value of squareArea will be set to 18"


# 📝 Instructions:

Create a new variable named squareArea for each new iteration of the calculateArea function using the figure dimensions, for example for the first figure,

```js
let squareArea1 = calculateArea(3,6);
```

For the Second figure,

```js
let squareArea2 = functionCall(x,y);
```

![img](http://i.imgur.com/VyoJRAL.png)


# 💡 Hint:

- Call the `squareArea` function 3 times, one per each square, passing the length and edge of each square.
- Click here to learn more about functions: http://www.mathopenref.com/functionsprog.html
