<!-- hide -->
<div align="center">

# Practice Javascript Functions Tutorial

<img width="560" alt="Tutorial cover: the words Learn How to use FUNCTIONS next to the yellow JavaScript logo and a hand icon clicking a button" src="https://raw.githubusercontent.com/4GeeksAcademy/javascript-functions-exercises-tutorial/master/.learn/assets/preview.png">

[![Certified tutorial](https://img.shields.io/badge/4Geeks_Academy-Certified_tutorial-2563eb)](https://4geeks.com/en/interactive-exercise/javascript-functions-exercises-tutorial)
[![Autograded with LearnPack](https://img.shields.io/badge/LearnPack-10_autograded_exercises-2563eb)](https://github.com/learnpack/learnpack)
[![Open in GitHub Codespaces](https://img.shields.io/badge/Open_in-GitHub_Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-functions-exercises-tutorial)

Read these instructions in [🇪🇸 Spanish](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial/blob/HEAD/README.es.md)

</div>
<!-- endhide -->

This LearnPack tutorial has 11 exercise folders about JavaScript functions: one welcome screen plus 10 challenges graded automatically by Jest on Node.js 22. You practice declaring and calling functions, parameters, the `return` statement, anonymous function expressions, arrow functions and `.sort()`. It is rated easy, takes around 5 hours, and every exercise comes with instructions in both English and Spanish.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty:** easy, for people who already write variables and `if` statements but have never written a function.
- **Estimated duration:** 5 hours.
- **Technologies:** JavaScript, Node.js.
- **Exercises:** 11 folders, 10 of them with an automated test file.
- **Grading:** automatic, Jest 29.7.0 plus `rewire` to read the variables inside your file.
- **Video solutions:** all 10 graded exercises link a walkthrough video in Spanish, 4 of them also in English.
- **Languages:** every exercise ships with `README.md` and `README.es.md`.
<!-- endhide -->

## 🎯 What will you learn?

The tutorial covers the core of JavaScript functions, one idea per exercise:

- **What a function actually is:** a fragment of code wrapped in curly brackets that you write once and reuse as many times as you want.
- **Declaring versus calling:** a function does nothing until something calls it, and the interpreter only knows it exists once it has been defined.
- **Parameters and arguments:** how many to declare, why descriptive names matter, and how the values travel into the function body.
- **The `return` statement:** why almost every function should return something, and how returning lets you feed one function's result straight into another one.
- **Scope:** what lives inside the curly brackets stays local, what lives outside is global.
- **Anonymous functions:** functions with no name that only work when you store them in a variable, such as `let multi = function(a, b) { ... }`.
- **Arrow functions:** the `=>` syntax, why it exists, and how it removes the need for `.bind()` when you later move on to React.
- **Built-in array methods:** using `.sort()` inside your own function to return a list of names in alphabetical order.
- **Printing to the console:** `console.log()` as a tracing tool to inspect what a function is returning.

## 👀 What will you build?

Each exercise is a small Node.js program that you complete inside `app.js`. These are the 10 graded ones:

- **`01` Hello World:** call `console.log()` exactly once so the console prints `Hello World`.
- **`02` What is a Function:** the `sum()` function is already written for you; call it with `3445324` and `53454423` and store the result, `56899747`, in a variable named `superduper`.
- **`03` Calling a Function:** call the ready-made `calculateArea()` three times, once per figure, and store the results in `squareArea1`, `squareArea2` and `squareArea3`.
- **`04` Defining VS Calling a Function:** write `multi` from scratch so it takes two numbers and returns their multiplication. It is graded with `multi(3, 6)` and `multi(4, 12)`, and the file already calls it with `multi(7, 53812212)`.
- **`05` Anonymous Functions:** `multi` is now an anonymous function stored in a variable. Use it to print the multiplication of `324234` by `47`, which is `15238998`.
- **`06` Arrow Function:** `multi` arrives here as a traditional `function` declaration; rewrite it with the arrow syntax. The output must stay identical, but the keyword `function` has to disappear from the file.
- **`07` Functions Should Return:** you get `dollarToEuro()` and `euroToYen()`. Chain them to convert 137 dollars into yen and print the result, `15137.609500000002`.
- **`08` Function Parameters:** write `renderPerson()` with five parameters so that it returns the sentence `Bob is a 23 years old male born in 05/22/1983 with green eyes`.
- **`09` Array Methods:** write `sortNames()` so that it receives an array of names, sorts it with `.sort()` and returns the sorted array.
- **`10` Remove Vowels:** write an arrow function called `rapid` that loops a string, drops every vowel and uppercases the rest, so `rapid("Wonderful")` returns `WNDRFL`.

These are the three figures of exercise `03`, and the reason `calculateArea()` has to be called with `(4, 4)`, `(2, 2)` and `(5, 5)`:

![Three squares drawn side by side with their dimensions written on the sides: a first square of 4 by 4 inches, a smaller one of 2 by 2 inches and a bigger one of 5 by 5 inches](https://raw.githubusercontent.com/4GeeksAcademy/javascript-functions-exercises-tutorial/master/.learn/assets/call-a-function.png)

## 🎓 What do you need before starting?

- **Basic JavaScript syntax:** declaring variables with `let` or `const`, and reading a simple `if`. Exercise `01` starts at `console.log()`, so nothing else is assumed.
- **No previous experience with functions:** the definition, the syntax, the parameters and the `return` are all taught from zero inside the tutorial.
- **No local setup if you use Codespaces:** the dev container already installs Node.js 22, Jest and the LearnPack CLI for you.
- **Node.js if you run it locally:** every exercise runs on Node, there is no browser, HTML or DOM involved.

## ✅ How does the automatic grading work?

10 of the 11 folders contain a test file: nine are called `tests.js` and the one in `07-Function-that-returns` is called `test.js`. Only `00-Welcome`, the intro screen, has none. When you click `Run`, LearnPack executes that file with Jest 29.7.0 and shows you exactly which assertion failed.

The tests check three different things, and knowing which one broke saves a lot of guessing:

1. **What you printed.** `console.log` is replaced by a mock, so the tests can count how many times you called it and compare the exact value it received.

2. **Your variables and functions by name.** The test loads `app.js` with `rewire` and pulls values out of it, so names like `superduper`, `squareArea1`, `multi`, `renderPerson`, `sortNames` or `rapid` must match the exercise literally.

3. **The source code of your `app.js`.** Several tests read the file as plain text and run a regular expression over it. That is how exercise `09` demands `.sort(` and exercise `10` demands both `const rapid = ... =>` and a `for` loop.

> 💡 The grading is deliberately strict, but treat it as a guide and not as a judge. If an exercise blocks you, open the menu, move on and come back later.

## 💡 What mistakes should you avoid?

1. **Printing when the exercise expects a `return`.** In `04`, `08`, `09` and `10` the `console.log()` line is already written at the bottom of `app.js`. If your function ends with a print instead of `return`, it returns `undefined` and the assertions fail even though the console looks fine.

2. **Writing the word `function` in exercise `06`.** The test runs the regex `/function/gm` over the whole file and fails if it matches anywhere, comments included. It also checks that `multi.prototype` is `undefined`, so only a real arrow function passes.

3. **Declaring `rapid` with `let` in exercise `10`.** The regex expects `const rapid = ... =>`, and a second test requires a `for` loop, so solving it with `replace()` and no loop fails too.

4. **Not using the exact numbers in the source.** Exercises `02`, `03` and `05` grep your file for the literal calls: `sum(3445324, 53454423)`, `calculateArea(4, 4)`, `calculateArea(2, 2)`, `calculateArea(5, 5)` and `multi(324234, 47)`. Precomputing the result and assigning it by hand does not pass.

5. **Leaving extra `console.log()` calls behind.** Exercises `01`, `05`, `06`, `07` and `08` assert that the console was called exactly once. A leftover debugging print turns a correct solution red.

6. **Returning a string where a number is expected.** Exercises `05` and `06` compare against the number `15238998`, so wrapping it in a template literal or concatenating any text makes the comparison fail.

7. **Changing the sentence or the parameter order in `08`.** The call already in the file is `renderPerson('Bob', '05/22/1983', 'green', 23, 'male')`, so the order is name, birth date, eye colour, age and gender. The expected string is compared character by character, including the words `is a`, `years old`, `born in` and `with green eyes`.

## ❓ Frequently asked questions

### Do I need to install anything to start?

No. Opening the repository in GitHub Codespaces gives you a container that installs Node.js 22, Jest 29.7.0 and the LearnPack CLI on its own, and the exercises open inside VS Code by themselves. Installing locally is optional and only requires Node.js plus a couple of commands in the terminal.

### How long does it take to finish the 10 exercises?

The package is estimated at 5 hours. The first ones are two-minute drills around `console.log()` and calling an existing function; the last three (`08` Function Parameters, `09` Array Methods and `10` Remove Vowels) are small algorithms where most of the time goes.

### What is the difference between a regular function, an anonymous function and an arrow function?

A regular function has a name of its own: `function multi(a, b) { return a * b; }`. An anonymous function has none, so it only becomes usable once you store it in a variable: `let multi = function(a, b) { return a * b; }`. An arrow function is a shorter form of the second one, `const multi = (a, b) => a * b`, and it does not create its own `this`, which is why it needs no `.bind()`. Exercises `04`, `05` and `06` walk the same multiplication through all three styles: you write it yourself in `04`, you get it ready-made as an anonymous function in `05`, and you turn it into an arrow in `06`.

### Why does my exercise fail if the console output looks correct?

Because several tests do not look at the console at all. Some read your source code with a regular expression, others load your variables with `rewire` and call your function with values you never tried, such as `multi(4, 12)` in exercise `04` or `rapid("Wonderful")` in exercise `10`. Read the name of the failing assertion: it tells you which of the three checks broke.

### Are the exercises and the video solutions available in Spanish?

Yes. All 11 folders include `README.md` and `README.es.md`, and you can switch language from the exercise menu without losing progress. The Spanish version links a walkthrough video for all 10 graded exercises; the English version links 4 of them, on exercises `01`, `02`, `04` and `05`.

### Does it cost anything, and who owns the code I write?

Access to this repository and its exercises costs nothing, and whatever you write inside `app.js` is yours. The tutorial content itself is not open source: it is published under reserved intellectual property terms that do not allow republishing or redistributing it. The full text is in [LICENSE.md](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial/blob/HEAD/LICENSE.md).

<!-- hide -->
## 📚 Related tutorials

This package is the third step of the interactive JavaScript series:

1. [JavaScript for Beginners](https://4geeks.com/en/interactive-exercise/javascript-beginner-exercises)
2. [Arrays and Loops](https://4geeks.com/en/interactive-exercise/javascript-array-loops-exercises)
3. **JavaScript Functions** ← you are here
4. [Master JavaScript Practicing](https://4geeks.com/en/interactive-exercise/master-javascript-exercises)

## 🚀 How to start

The fastest way is [Open in GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-functions-exercises-tutorial). The container installs everything and the exercises start on their own inside VS Code.

If they do not start automatically, run this in the terminal:

```bash
learnpack start
```

You can also open the package in [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial). Use the top menu to move between exercises and to switch the instructions between English and Spanish.

## 💻 Local installation

Clone the repository and follow these steps:

1. Install LearnPack and its Node.js compiler plugin. You need Node.js installed first:

   ```bash
   npm i @learnpack/learnpack -g
   learnpack plugins:install @learnpack/node
   ```

2. Start the tutorial from the same folder where `learn.json` lives:

   ```bash
   learnpack start
   ```

If something goes wrong, the [LearnPack quickstart for learners](https://4geeks.com/docs/learnpack/quickstart-for-learners) walks through the whole setup.

## 📝 How the exercises are organized

Each of the 10 graded folders inside `exercises/` is one small Node.js program with these files:

- **`app.js`:** the file you edit, and the entry point that gets executed.
- **`README.md`:** the instructions in English.
- **`README.es.md`:** the same instructions in Spanish.
- **`tests.js`:** the Jest test that grades your solution, named `test.js` in exercise `07`. You do not need to open it.
- **`solution.hide.js`:** a working solution, hidden by LearnPack until you ask for it.

`00-Welcome` is the exception: it is only the intro screen and contains nothing but the two `README` files.

## 🤝 Contributors

Thanks to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr): coder 💻, idea 🤔, build-tests ⚠️, pull-request-review 👀, build-tutorial ✅, documentation 📖

2. [Paolo (plucodev)](https://github.com/plucodev): bug reports 🐛, coder 💻, translation 🌎

3. [Marco Gómez (marcogonzalo)](https://github.com/marcogonzalo): bug reports 🐛, translation 🌎

4. [Luis Rivera (Luis846)](https://github.com/Luis846): coder 💻, build-tests ⚠️

See the full list on the [contributors graph](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial/graphs/contributors). This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification and contributions of any kind are welcome. If you find a bug or a typo, please report it or send a pull request.
<!-- endhide -->
