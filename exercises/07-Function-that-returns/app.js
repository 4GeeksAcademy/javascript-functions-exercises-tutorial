let dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}

let euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

// let dollarToYen = function(dollarValue){
// 	return dollarValue* 124.15;
// }

// let cambioDtoY = 137*124.15*0.89
// // console.log(cambioDtoY)

console.log(euroToYen(dollarToEuro(137)))
