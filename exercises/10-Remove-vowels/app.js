// Este intento no fue valido. en el terminal , me faltó el check del Loop. pero me parecio interesante el uso de replace().
// Procedo a explicar para entenderlo nuevamente si vuelvo a revisar los ejercicios.
// 
// .replace() Modifica el string.
//     []     Indican que es un grupo de caracteres.
//     g      Indica que analice todo el string, que no se quede con la primera coincidencia.
//     ''     Indica el caracter por el que se cambia, en este caso, nada.
//
//
//const rapid = (a) => a.replace(/[aeiou]/g, '').toUpperCase();
//
// Your code goes here
const rapid = (a) => {

    let consonantes = [];
    let vocales = ['a','e','i','o','u'];

    for (let letra of a.toLowerCase()) {
        if (!vocales.includes(letra))
            consonantes.push(letra.toUpperCase())
    }
    
  return consonantes.join('');
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
