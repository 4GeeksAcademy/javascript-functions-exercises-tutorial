# `04` Defining VS Calling a Function

Las `funciones` solo existen si tu u otra persona las define... es la única forma en que el lenguaje compilador/intérprete sabe que existen, por lo tanto, puede ejecutarlas cuando las llamas.

Para definir una función necesitamos escribir esta fórmula de código básica:

```js
function myFunctionName(parametro, parametro2,... parametroX) {
    //el código de la función va aquí
    return algo;
}
```

La palabra `function` es una palabra reservada en javascript, esto significa que solo se usa para definir una `función`.

**El nombre:** de la `función` podría ser lo que quieras. Consejo: usa un nombre descriptivo (no intentes ahorrar palabras, usa tantas como necesites) de esta manera entenderás lo que hace la `función` (y lo que devuelve).

Nombres de ejemplo: `addTwoIntegers` (sumaDosEnteros), `convertAStringIntoAnInteger` (convertirUnStringEnEntero),  `changeTheWorldUsingFrontEndDevelopment` (cambiaElMundoUsandoDesarrolloFrontEnd).

**Parámetros:** puedes definir tantos `parámetros` como desees dentro de los () (paréntesis). La cantidad de `parámetros` dependerá de las operaciones realizadas dentro de la función. Por ejemplo: si la función está sumando dos enteros (3 + 4), esto significa que la función necesitará dos `parámetros` (uno por cada entero).

**Alcance:** Todas las operaciones que haga la función deben estar dentro de las `{` `}` (llaves). Cualquier cosa que esté fuera, no se considerará como parte de la función. Esto se llama  **alcance** (scope), y podría ser local (dentro de la función) y global (fuera de la función).

**El retorno:** No todas las funciones deben retornar algo, pero se recomienda que lo hagan. Consejo: `return;` es un buen valor predeterminado para cuando, aún, no sabes si se necesita retornar algo.

Ejemplo de una funcion:

```js
function concatenateNumberToString(localNumber, localString) {
    let localVariable = localString+""+localNumber;
    return localVariable;
}
```

## 📝 Instrucciones:

1. Define una función llamada `multi`.

2. La función `multi` recibe dos números.

3. Retorna el resultado de la multiplicación entre ellos.

## 💡 Pista:

+ Recuerda agregar la línea de `return`. Cada función debe retornar algo. En este caso debería ser el resultado de la multiplicación.

+ ¡No te olvides del punto y coma!