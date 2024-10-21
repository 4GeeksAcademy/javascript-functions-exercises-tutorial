// Your code goes here
/*const rapid = (str) => {
    str = str.replace('a', '');
    str = str.replace('e', '');
    str = str.replace('i', '');
    str = str.replace('o', '');
    str = str.replace('u', '');

    str = str.toUpperCase();

    return str
}*/
const rapid = (str) => {
    let vocals = ['a', 'e', 'i', 'o', 'u'];

    for (let letter of str) {
        if (vocals.includes(letter) === true) {
            str = str.replace(letter, '');
        } 
    }    
    str = str.toUpperCase();

    return str    
     
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
