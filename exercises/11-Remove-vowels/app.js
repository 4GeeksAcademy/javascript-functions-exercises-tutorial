
const rapid = (myString) => {
    let consonants = [];
    for(let position in myString){
        if(['a','e','i','o','u'].includes(myString[position]) == false)
            consonants.push(myString[position])
    }
    return consonants.join('');
}

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));