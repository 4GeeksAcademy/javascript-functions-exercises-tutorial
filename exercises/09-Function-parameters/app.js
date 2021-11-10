// Your code goes here:
function renderPerson (nombre, fecha, color, edad, genero) {
  let persona = nombre + " is a " + edad + " years old " + genero + " born in " + fecha + " with " + color + " eyes"; 
  return persona;
}


///*** Do not edit below this line ****/
console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));