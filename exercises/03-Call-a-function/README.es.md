---
tutorial: "https://www.youtube.com/watch?v=t9tWtuVqT4k"
---

# `03` Calling a Function

Las `funciones` son **bloques de código** que se guardan para ser (re)utilizados más tarde; ese fragmento específico de código tiene un propósito predefinido y realiza una tarea definida. Una función podría recibir algunos o ningún parámetro para poder ejecutarse y siempre debe retornar algo.

Por ejemplo, una `función` que calcula el área de un cuadrado sería algo como esto:

```js
function calculateArea(length, width) {
    return length * width;
}
```

Si deseas usar esa `función` para calcular el área de un cuadrado con

```js
length = 6  // longitud
width = 3   // ancho
```

Necesitas hacer algo como esto:

```js
let squareArea = calculateArea(6, 3);
```

El valor de `squareArea` se establecerá en `18`.

## 📝 Instrucciones:

1. Crea una nueva variable llamada `squareArea` para cada nueva iteración de la función `CalculateArea` utilizando las dimensiones de las siguientes figuras:

![cuadrados](../../.learn/assets/call-a-function.png)  

## 📎 Ejemplo:

Para la primera figura:

```js
let squareArea1 = calculateArea(4, 4);
```

Para la segunda figura:

```js
let squareArea2 = functionCall(x, y);
```

## 💡 Pistas:

+ Llama a la función `calculateArea` 3 veces, una por cada cuadrado, pasando la longitud y el ancho de cada cuadrado.

+ Haz clic aquí para obtener más información sobre las funciones: [http://www.mathopenref.com/functionsprog.html](http://www.mathopenref.com/functionsprog.html)
