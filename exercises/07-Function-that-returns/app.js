let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///
let Xeuros = dollarToEuro(137);
let Xyenes =euroToYen(Xeuros);
console.log(Xyenes);

//en este ejercicio replicamos lo aprendido en el N°5 usando funciones anónimas... 
//por lo que la misma no tiene nombre propio... pero si está asignada a una variable,
//puedo llamarla usando el nombre de esa variable.
//*la variable es la que va al lado del "let", no confundir con el "parámetro"*/
//viendo un tutorial de 4geeks, también se puede resolver con la función flecha.
//const dollarToYen = (dollars) => {
//	let euros = dollarToEuro(dollars);
//	return EuroToYen(euros)}
//
//const result = dollarToYen(137)
//console.log (result);