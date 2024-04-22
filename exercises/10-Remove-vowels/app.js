// Your code goes here

// let rapid = (str) => {
//     let noVowels = str.replace(/[aeiou]/gi, '').toLowerCase();
//     let upperCase = noVowels.toUpperCase()
            
//         return upperCase

// }

let rapid = (name) => {
    let consonants = [];
  
    for (let i = 0; i < name.length; i++) {
      if (!['a', 'e', 'i', 'o', 'u'].includes(name[i].toLowerCase())) {
        consonants.push(name[i].toUpperCase());
      }
    }
  
    return consonants.join('');
  };
  
  let str = "Jhon";
  console.log(rapid(str));
