const rapid = (myString) => {
    let consonants = [];
    for(let letter of myString){
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter)
    }
    return consonants.join('');
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
