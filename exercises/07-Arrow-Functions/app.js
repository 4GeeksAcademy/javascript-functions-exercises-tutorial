const rapid = (string) => {
    let vowels = {
       'a': true,
       'e': true,
       'i': true,
       'o': true,
       'u': true
     };
   
     let result = "";
   
     for (let i = 0; i < string.length; i++) {
       let x = string[i].toLowerCase();
       if (!vowels[x]) {
         result += string[i];
       }
     }
     return result.toUpperCase();
   }
   // From this line up
   let str = "John";
   console.log(rapid(str));