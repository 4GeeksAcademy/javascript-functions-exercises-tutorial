# `06` Arrow Function

Una función **arrow** (o de flecha) es **muy similar** a una función tradicional al principio, la diferencia más importante es el símbolo de flecha `=>` que va justo después de la declaración de los parámetros de la función: 

```js
const sum = (param1, param2) => {
    return param1 + param2;
}
```

¿Ves la flecha `=>`?

En lugar de `function sum(){` debemos colocar `const sum = () => {`, el resto de la sintáxis de la función se mantiene igual.

### Pero, ¿Por qué usar funciones flecha en primer lugar?

- Cuando son de una sola línea de código (como un gran porcentaje de las funciones que crearás), son más rápidas y cortas de escribir.

- Las funciones flecha pueden corregir un problema de **alcance** que tienen las funciones tradicionales en JS, que requieren de "binding", especialmente cuando se trabaja con React. Las funciones de flecha no requieren de `.bind()`. Puedes [leer más al respecto aquí](https://stackoverflow.com/questions/52979915/why-we-dont-need-to-bind-the-arrow-function-in-react).  

- Las funciones flecha se comportan como las funciones en cualquier otro lenguaje, las funciones tradicionales no.

## 📝 Instrucciones:

1. Cambia la sintaxis de la función `multi` para que sea de tipo flecha y no una función tradicional.
