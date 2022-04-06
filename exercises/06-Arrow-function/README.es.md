# `06` Arrow Function

Una función **arrow** (o de flecha) es **muy similar** a una función tradicional al principio, la diferencia más importante es el símbolo de flecha `=>` que va justo después de la declaración de los parámetros de la función: 

```js
const sum = (param1, param2) => {
    return param1 * param2;
}
```

¿Ves la flecha `=>`?

En lugar de `function sum(){` debemos colocar `const sum = () => {`, el resto de la sintáxis de la función se mantiene igual.

### Pero, ¿Por qué usar arrows en lugar de funciones tradicionales?

- Son mas rápidas y cortas de escribir.

- Son ideales cuando tienen una sola línea de código ( un gran porcentaje de las funciones que crearás), 

- Las funciones de flecha pueden corregir un problema de **alcance** que tienen las funciones tradicionales en JS, que requieren de una "unión" (binding), especialmente cuando se trabaja con React. Las funciones de flecha no requieren de `.bind()`. Puedes leer más al respecto aquí: https://stackoverflow.com/questions/52979915/why-we-dont-need-to-bind-the-arrow-function-in-react 

- Las funciones de flecha se comportan como las funciones en cualquier otro lenguaje, las functiones tradicionales no.

## 📝 Instructions:

1. Cambia la sintaxis de la función `multy` para que sea de tipo flecha (arrow) y no una función tradicional.