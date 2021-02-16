# `07` Arrow function

Una function **arrow** (o flecha) es **muy similar** a una function tradicional, la differencia mas importante es el símbolo de flecha `=>` que contiene justo después de la declaración de sus parámetros: 

```js
const sum = (param1, param2) => {
    return param1 * param2;
}
```

Logras ver la flecha `=>`?

En lugar de `function sum(){` debemos colocar `const sum = () => {`, el resto de la sintáxis se mantiene igual.

### Pero, ¿Porqué usar arrows en lugar de funciones tradicionales?

- Son mas rápidas y cortas de escribir.
- Pueden contener una sola linea de codigo.
- Las arrows llegan para corregir un problema de **alcance** que tenian las funciones tradicionales en JS.
- Las arrows se comportan como las functiones en cualquier otro lenguage, las functiones tradicionales no.

## 📝 Instructions

Cambia la sintaxis de la función `multy` para que sea de tipo arrow y no function tradicional.