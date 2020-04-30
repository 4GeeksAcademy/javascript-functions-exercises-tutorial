# `05` Definir vs llamar a una función

Las funciones solo existirán si usted u otra persona las define ... es la única forma en que el compilador/intérprete de idiomas sabe que existen, por lo tanto, puede ejecutarlas cuando las llama.

Para definir una función necesitamos escribir esta fórmula básica de código:

```js
function myFunctionName(parameter, parameter2,... parameterX) {
    //the function code here
    return something;
}
```

La palabra `function` es una palabra reservada en javascript, esto significa que solo se usa para definir una función.

**El nombre** de la función podría ser lo que quieras. Consejo: usa un nombre descriptivo (no intentes ahorrar palabras, usa tantas como necesites) de esta manera entenderás lo que hace la función -y lo que devuelve-.
Nombres de ejemplo: addTwoIntegers, convertAStringIntoAnInteger, changeTheWorldUsingFrontEndDevelopment

**Parámetros:** puedes definir tantos parámetros como desees, más aún, si los necesitas. La cantidad de parámetros dependerá de las operaciones realizadas dentro de la función. Ejemplo: si la función está agregando dos enteros (3 + 4), esto significa que la función necesitará dos parámetros (uno para cada entero).

**Alcance:** Todas las operaciones que realizará la función deben estar dentro de `{` `}` (llaves). Cualquier cosa por fuera, no se considerará como parte de la función. Esto se llama **el alcance** (scope), y podría ser local (dentro de la función) y global (fuera de la función).

**El retorno**: no todas las funciones necesitan devolver algo, pero se recomienda que lo haga.
Consejo: `return;` es un buen valor predeterminado para cuando, aún, no sabes si se necesita devolver algo.

Ejemplo de una funcion:

```js
function concatenateNumberToString(localNumber, localString) {
    let localVariable = localString+""+localNumber;
    return localVariable;
}
```

# 📝 Instrucciones:

1. Define una función llamada "multi".
2. La función múltiple recibe dos números
3. Devuelve el resultado de la multiplicación entre ellos.

# 💡 Pista:

Recuerda agregar la línea de `return`. Cada función debe devolver algo. En este caso debería ser el resultado de la multiplicación.

¡No te olvides del punto y coma!
