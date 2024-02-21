// Your code goes here:
function renderPerson(name, birthDate, eyeColor, age, gender) {
    return name + ' is a ' + age + ' years old ' + gender + ' born in ' + birthDate + ' with ' + eyeColor + ' eyes';
}

/*  Solution 2: (using backticks)

function renderPerson(name, birthDate, eyeColor, age, gender) {
    return `${name} is a ${age} years old ${gender} born in ${birthDate} with ${eyeColor} eyes`;
}

*/

///*** Do not edit below this line ***///
console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));
